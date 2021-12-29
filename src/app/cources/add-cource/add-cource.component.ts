import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ICource } from 'src/app/core/models/cource';
import { DateInputComponent } from 'src/app/shared/inputs/date-input/date-input.component';
import { DurationInputComponent } from 'src/app/shared/inputs/duration-input/duration-input.component';
import { CourceService } from '../services/cource.service';

@Component({
  selector: 'add-cource',
  templateUrl: './add-cource.component.html',
  styleUrls: ['./add-cource.component.scss']
})
export class AddCourceComponent implements OnInit, AfterViewInit {

  private currentCource: ICource | null = null;

  @ViewChild(DurationInputComponent)
  private durationComponent: DurationInputComponent | undefined;

  @ViewChild(DateInputComponent)
  private dateComponent: DateInputComponent | undefined;

  public title: string = '';
  public description: string = '';
  public header: string = 'Add new cource';

  constructor(private courceService: CourceService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngAfterViewInit(): void {
    // выходит ошибка ExpressionChangedAfterItHasBeenCheckedError
    // но значение устанавливается, не смог победить
    this.durationComponent!.duration = this.currentCource!.length;
    this.dateComponent!.date = new Date(this.currentCource?.date!);
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      if (+params.id) {
        this.courceService.getById(+params.id).subscribe(cource => {
          this.currentCource = cource;
          if (this.currentCource) {
            this.header = "Edit";
            this.title = this.currentCource.name,
              this.description = this.currentCource.description
          }
        }, error => {
          console.log(error);
        })
      }
    })
  }


  private addNewCource() {
    const cource: ICource = {
      name: this.title,
      description: this.description,
      length: this.durationComponent!.duration,
      date: new Date(this.dateComponent!.date!),
      isTopRated: false
    }

    this.courceService.add(cource).subscribe(c => {
      console.log('New course has been added', cource)
    });
  }

  private editCource() {
    this.currentCource!.name = this.title;
    this.currentCource!.description = this.description;
    this.currentCource!.length = this.durationComponent!.duration,
      this.currentCource!.date = new Date(this.dateComponent!.date!),
      this.courceService.edit(this.currentCource!).subscribe(cource => {
        console.log('Cource has been changed', cource);
      });
  }

  private isNewCource() {
    if (this.currentCource) {
      return false;
    } else {
      return true;
    }
  }

  public saveCource(){
    this.isNewCource() ? this.addNewCource() : this.editCource()
    this.cleanForms();
    this.router.navigate(['/cources']);
  }

  public closeWindow(){
    this.router.navigate(['/cources']);
  }

  private cleanForms(){
    this.title = '';
    this.description = '',
    this.durationComponent!.duration = 0
  }
}

import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
export class AddCourceComponent implements OnInit {

  @ViewChild(DurationInputComponent)
  private durationComponent: DurationInputComponent | undefined;

  @ViewChild(DateInputComponent)
  private dateComponent: DateInputComponent | undefined;

  public title: string = '';
  public description: string = '';

  constructor(private courceService: CourceService) { }

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>()

  ngOnInit(): void {
  }


  public saveCource(){
    const cource: ICource = {
      id: this.courceService.setCourceId(),
      title: this.title,
      description: this.description,
      duration: this.durationComponent!.duration,
      creationDate: new Date(this.dateComponent!.date!),
      istopRate: false
    }

    this.courceService.add(cource);
    this.cleanForms();
    this.onClose.emit();
  }

  public closeWindow(){
    this.onClose.emit();
  }

  private cleanForms(){
    this.title = '';
    this.description = '',
    this.durationComponent!.duration = 0
  }

}

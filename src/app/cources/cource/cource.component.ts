import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICource } from 'src/app/core/models/cource';

@Component({
  selector: 'cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss']
})
export class CourceComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() cource: ICource | null = null;
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cource ngOnChanges');
  }
  ngAfterContentInit(): void {
    console.log('Cource ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Cource ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Cource ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('Cource ngAfterViewChecked');
  }
  ngDoCheck(): void {
    console.log('Cource ngDoCheck');
    this.cource!.simpleDate = this.cource?.creationDate.getDate()
  }

  ngOnInit(): void {
    console.log('Cource ngOnInit');
  }

  public delete(id: number | any) {
    this.onDelete.emit(id);
  }
}

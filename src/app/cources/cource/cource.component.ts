import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICource } from 'src/app/core/models/cource';
import { CourceService } from '../services/cource.service';

@Component({
  selector: 'cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss']
})
export class CourceComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() cource: ICource | null = null;
  @Output() deleteCource = new EventEmitter<number>();

  constructor(
    private courceService: CourceService) { }

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngAfterContentInit(): void {
  }
  ngAfterContentChecked(): void {
  }
  ngAfterViewInit(): void {
  }
  ngAfterViewChecked(): void {
  }
  ngDoCheck(): void {
  }

  ngOnInit(): void {
  }

  public delete() {
    this.deleteCource.emit(this.cource?.id);
  }
}

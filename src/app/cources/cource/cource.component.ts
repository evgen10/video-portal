import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICource } from 'src/app/core/models/cource';
import { CourceService } from '../services/cource.service';

@Component({
  selector: 'cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() cource: ICource | null = null;
  @Output() deleteCource = new EventEmitter<number>();

  constructor(
    private courceService: CourceService,
    private router: Router) { }

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
  public edit() {
    this.router.navigate(['/cources', this.cource?.id])

  }
}

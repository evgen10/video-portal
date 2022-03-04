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
export class CourceComponent {

  @Input() cource: ICource | null = null;
  @Output() deleteCource = new EventEmitter<number>();

  constructor(
    private router: Router) { }

  public delete() {
    this.deleteCource.emit(this.cource?.id);
  }
  public edit() {
    this.router.navigate(['/cources', this.cource?.id])
  }
}

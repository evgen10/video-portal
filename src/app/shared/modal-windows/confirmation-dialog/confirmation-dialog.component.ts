import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CourcesState } from 'src/app/cources/store/cource.state';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() public title = '';
  @Output() public decline = new EventEmitter<void>();
  @Output() public confirm = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public declineAction(){
    this.decline.emit();
  }

  public confirmAction(){
    this.confirm.emit()
  }
}

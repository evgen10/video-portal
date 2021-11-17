import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() public title ='Do you really want to delete this cource?';
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

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  @Input()
  public date: Date | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

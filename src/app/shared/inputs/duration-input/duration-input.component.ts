import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  public duration: number  = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

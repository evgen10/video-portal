import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public currentText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentText = 'Cource'
  }

}

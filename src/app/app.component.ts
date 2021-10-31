import { Component, OnInit } from '@angular/core';
import { ICource } from './core/models/cource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'video-portal-app';
  ngOnInit(): void {
  }

}

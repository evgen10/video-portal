import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cource-search',
  templateUrl: './cource-search.component.html',
  styleUrls: ['./cource-search.component.scss']
})
export class CourceSearchComponent implements OnInit {

  public searchText: string =  '';
  constructor() { }

  ngOnInit(): void {
  }

  public search(){
    console.log(this.searchText);
    this.searchText = '';
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cource-search',
  templateUrl: './cource-search.component.html',
  styleUrls: ['./cource-search.component.scss']
})
export class CourceSearchComponent implements OnInit {

  public searchText: string =  '';
  @Output()
  public onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public search(){
    this.onSearch.emit(this.searchText);
  }
}

import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'cource-search',
  templateUrl: './cource-search.component.html',
  styleUrls: ['./cource-search.component.scss']
})
export class CourceSearchComponent implements OnInit, OnDestroy{

  public searchText: string =  '';
  @Output()
  public onSearch = new EventEmitter<string>();

  private searchSubject$ = new Subject<KeyboardEvent>();

  constructor() { }

  ngOnDestroy(): void {
    this.searchSubject$.unsubscribe();
  }

  ngOnInit(): void {
    this.searchSubject$
    .pipe(debounceTime(500))
    .subscribe(x =>
      {
        if (this.searchText.length >= 3 || this.searchText.length == 0) {
          this.onSearch.emit(this.searchText)
        }
      });
  }

  public onKey(event: KeyboardEvent){
    this.searchSubject$.next(event);
  }
}

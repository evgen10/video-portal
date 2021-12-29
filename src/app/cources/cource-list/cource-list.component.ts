import { Component, DoCheck, OnDestroy, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { ICource } from 'src/app/core/models/cource';
import { FilterCourcesPipe } from '../cource/pipes/filter-cources.pipe';
import { CourceService } from '../services/cource.service';
import {map} from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent implements OnInit, OnDestroy {

  private readonly defaultCount: number = 5;
  private deleteCourceId: number = 0;
  private subscriptions: Subscription[] = [];

  public videoCources: Array<ICource> = [];
  public searchText: string = '';

  public isDeleteModalShow = false;
  public isLoadMore = false;
  public pagingText = 'load more';

  constructor(
    private courceService: CourceService,
    private router: Router) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  ngOnInit(): void {
    this.featchCources();
  }

  public trackById(index: number, cource: ICource): number | undefined{
    return cource?.id
  }

  public loadMore() {
    this.pagingText = this.isLoadMore ? this.pagingText = 'load more' : this.pagingText = 'show less';
    this.isLoadMore = !this.isLoadMore;
    this.featchCources();
  }

  public searchCources(text: string) {
    this.searchText = text;
    this.featchCources();
  }

  public isNotEmptyList(): boolean {
    return this.videoCources.length > 0;
  }

  public closeDeleteModal() {
    this.isDeleteModalShow = false;
    this.deleteCourceId = 0;
  }

  public confirmDeleteAction() {
    this.isDeleteModalShow = false;
    const subscription = this.courceService.remove(this.deleteCourceId).subscribe(x => {
      this.featchCources();
      this.deleteCourceId = 0;
    });
    this.subscriptions.push(subscription);
  }

  public onDeleteCource(id: number) {
    this.isDeleteModalShow = true;
    this.deleteCourceId = id;
  }

  public addCource(){
    this.router.navigate(['/cources', 'new']);
  }

  private featchCources() {
    const count = !this.isLoadMore ? this.defaultCount : 0;
    const subscription = this.courceService.getAll(count, this.searchText).pipe(map(cources => {
      cources.map(cource => cource.date = new Date(cource.date))
      return cources;
    })).subscribe(cources => {
      this.videoCources = cources;
    });
    this.subscriptions.push(subscription);
  }
}

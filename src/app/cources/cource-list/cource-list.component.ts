import { Component, DoCheck, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ICource } from 'src/app/core/models/cource';
import { Observable, Subscription } from 'rxjs';
import { CourcesState } from '../store/cource.state';
import { Store } from '@ngrx/store';
import { selectCourceList, selectIsDeleteModalShowed } from '../store/cource.selectors';
import { changeDeleteModal, deleteCource, getCources } from '../store/cource.actions';
import { LoadingState } from 'src/app/elements/loading/store/loading.state';
import { setLoader } from 'src/app/elements/loading/store/loading.actions';
import { map } from 'rxjs/operators';


@Component({
  selector: 'cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent implements OnInit {
  private readonly defaultCount: number = 5;
  public searchText: string = '';

  public courcesList$: Observable<Array<ICource>> = this.courcesState.select(selectCourceList);
  public isDeleteModalShowed$: Observable<boolean> = this.courcesState.select(selectIsDeleteModalShowed);
  public isCourceListEmpty$: Observable<boolean> = this.courcesList$.pipe(map((x) => x.length > 1));

  public isLoadMore = false;
  public pagingText = 'load more';

  constructor(
    private router: Router,
    private loadingState: Store<LoadingState>,
    private courcesState: Store<CourcesState>) { }

  ngOnInit(): void {
    this.featchCources();
  }

  public trackById(index: number, cource: ICource): number | undefined {
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

  public closeDeleteModal() {
    this.courcesState.dispatch(changeDeleteModal({
      deleteState:
      {
        isShowModal: false,
        courceId: 0
      }
    }));
  }

  public confirmDeleteAction() {
    this.loadingState.dispatch(setLoader({ isLoading: true }));
    this.courcesState.dispatch(deleteCource());
  }

  public onDeleteCource(id: number) {
    this.courcesState.dispatch(changeDeleteModal(changeDeleteModal({
      deleteState:
      {
        isShowModal: true,
        courceId: id
      }
    })));
  }

  public addCource() {
    this.router.navigate(['/cources', 'new']);
  }

  private featchCources() {
    const count = !this.isLoadMore ? this.defaultCount : 0;
    this.loadingState.dispatch(setLoader({ isLoading: true }));
    this.courcesState.dispatch(getCources({ number: count, textFragment: this.searchText }));
  }
}

import { Component, DoCheck, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { ICource } from 'src/app/core/models/cource';
import { FilterCourcesPipe } from '../cource/pipes/filter-cources.pipe';
import { CourceService } from '../services/cource.service';

@Component({
  selector: 'cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent implements OnInit, DoCheck {

  private deleteCourceId: number = 0;

  public videoCources: Array<ICource> = [];
  public searchText: string = '';

  public isDeleteModalShow = false;

  constructor(
    private courceFilterPipe: FilterCourcesPipe,
    private courceService: CourceService,
    private router: Router) { }

  ngDoCheck(): void {
    this.videoCources = this.courceService.getAll();
  }

  ngOnInit(): void {
    this.videoCources = this.courceService.getAll();
  }

  public getCourceList() {
    return this.courceFilterPipe.transform(this.videoCources, this.searchText);
  }

  public trackById(index: number, cource: ICource): number {
    return cource?.id
  }

  public loadMore() {
    console.log('Load more button');
  }

  public searchCources(text: string) {
    this.searchText = text;
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
    this.courceService.remove(this.deleteCourceId);
    this.deleteCourceId = 0;
  }

  public onDeleteCource(id: number) {
    this.isDeleteModalShow = true;
    this.deleteCourceId = id;
  }

  public addCource(){
    this.router.navigate(['/cources', 'new']);
  }

}

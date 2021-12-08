import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CourceListComponent } from './cource-list/cource-list.component';
import { CourceSearchComponent } from './cource-search/cource-search.component';
import { CourceComponent } from './cource/cource.component';
import { CourceHighlightDirective } from './cource/directives/cource-highlight.directive';
import { CourceSortPipe } from './cource/pipes/cource-sort.pipe';
import { DurationPipe } from './cource/pipes/duration.pipe';
import { FilterCourcesPipe } from './cource/pipes/filter-cources.pipe';



@NgModule({
  declarations: [
    CourceListComponent,
    CourceComponent,
    CourceSearchComponent,
    CourceHighlightDirective,
    DurationPipe,
    CourceSortPipe,
    FilterCourcesPipe,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CourceListComponent,
    CourceComponent,
    CourceSearchComponent
  ]
})
export class CourceModule { }

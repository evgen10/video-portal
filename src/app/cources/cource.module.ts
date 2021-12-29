import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CourceListComponent } from './cource-list/cource-list.component';
import { CourceSearchComponent } from './cource-search/cource-search.component';
import { CourceComponent } from './cource/cource.component';
import { CourceSortPipe } from './cource/pipes/cource-sort.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { FilterCourcesPipe } from './cource/pipes/filter-cources.pipe';
import { CourceHighlightDirective } from './cource/directives/cource-highlight.directive';
import { AddCourceComponent } from './add-cource/add-cource.component';
import { AppRoutingModule } from '../app.routing.module';



@NgModule({
  declarations: [
    CourceListComponent,
    CourceComponent,
    CourceSearchComponent,
    CourceSortPipe,
    FilterCourcesPipe,
    CourceHighlightDirective,
    AddCourceComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    CourceListComponent,
    CourceComponent,
    CourceSearchComponent,
    AddCourceComponent
  ]
})
export class CourceModule { }

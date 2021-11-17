import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourceSortPipe } from '../cource/pipes/cource-sort.pipe';
import { FilterCourcesPipe } from '../cource/pipes/filter-cources.pipe';

import { CourceListComponent } from './cource-list.component';

describe('CourceListComponent', () => {
  let component: CourceListComponent;
  let fixture: ComponentFixture<CourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceListComponent ],
      providers: [FilterCourcesPipe, CourceSortPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create add a video cource', () => {
    component.ngOnInit();
    component.addCource();
    expect(component.videoCources.length == 4).toBeTruthy();
  })
});

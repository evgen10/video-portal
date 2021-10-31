import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourceSearchComponent } from './cource-search.component';

describe('CourceSearchComponent', () => {
  let component: CourceSearchComponent;
  let fixture: ComponentFixture<CourceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear input after search', () => {
    component.searchText = 'some text for search';
    component.search();
    expect(component.searchText).toBe('')
  })
});

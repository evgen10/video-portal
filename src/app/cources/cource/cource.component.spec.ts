import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICource } from 'src/app/core/models/cource';

import { CourceComponent } from './cource.component';

describe('CourceComponent', () => {
  @Component({
    template: `<cource (onDelete)="courceDelete($event)" [cource]="cource"></cource>`
  })
  class TestCourceListComponent{
    cource: ICource = {
      id: 2,
      duration: 108,
      description: "decr",
      title: 'title',
      creationDate: new Date()
    };
  };

  let hostComponent: TestCourceListComponent;
  let testFixture: ComponentFixture<TestCourceListComponent>;

  let component: CourceComponent;
  let fixture: ComponentFixture<CourceComponent>;
  let cource: ICource;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceComponent, TestCourceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceComponent);
    component = fixture.componentInstance;
    cource = {
      id: 1,
      duration: 105,
      description: "decr",
      title: 'title',
      creationDate: new Date(),
      istopRate: false
    };
    component.cource = cource;

    //host component settings
    testFixture = TestBed.createComponent(TestCourceListComponent);
    hostComponent = testFixture.componentInstance;

    fixture.detectChanges();
    testFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass value by event emmiter', () => {
    let courceId = 0;
    component.onDelete.subscribe(v => courceId = v);
    component.delete(cource.id);
    expect(courceId).toBe(cource.id);
  })

  it('should render cource duration', () => {
    let element = fixture.debugElement.query(By.css('.cource__duration'))
    let htmlElement = element.nativeElement;

    expect(htmlElement.textContent).toContain(cource.duration.toString());
  });

  it('should render cource creation date', () => {
    let element = fixture.debugElement.query(By.css('.cource__date'))
    let htmlElement = element.nativeElement;

    expect(htmlElement.textContent).toContain(cource.creationDate.toString());
  });

  it('should render cource duration', () => {
    let element = fixture.debugElement.query(By.css('.cource__duration'))
    let htmlElement = element.nativeElement;

    expect(htmlElement.textContent).toContain(cource.duration.toString());
  });

  it('should render cource title', () => {
    let element = fixture.debugElement.query(By.css('h2'))
    let htmlElement = element.nativeElement;

    expect(htmlElement.textContent).toContain(cource.title.toString());
  });

  it('should render cource description', () => {
    let courceEl = testFixture.nativeElement.querySelector('.cource__descr');
    expect(courceEl.textContent).toBe(hostComponent.cource.description);
  });
});

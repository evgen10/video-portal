import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICource } from 'src/app/core/models/cource';

import { CourceComponent } from './cource.component';

describe('CourceComponent', () => {
  let component: CourceComponent;
  let fixture: ComponentFixture<CourceComponent>;
  let cource: ICource;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceComponent ]
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
      creationDate: new Date()
    };
    component.cource = cource;
    fixture.detectChanges();
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
    let element = fixture.debugElement.query(By.css('.cource__descr'))
    let htmlElement = element.nativeElement;

    expect(htmlElement.textContent).toContain(cource.description.toString());
  });
});

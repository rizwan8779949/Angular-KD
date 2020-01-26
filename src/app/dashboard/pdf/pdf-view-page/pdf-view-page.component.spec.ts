import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewPageComponent } from './pdf-view-page.component';

describe('PdfViewPageComponent', () => {
  let component: PdfViewPageComponent;
  let fixture: ComponentFixture<PdfViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

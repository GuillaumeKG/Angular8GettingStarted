import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfoaDetailComponent } from './bfoa-detail.component';

describe('BfoaDetailComponent', () => {
  let component: BfoaDetailComponent;
  let fixture: ComponentFixture<BfoaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfoaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfoaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

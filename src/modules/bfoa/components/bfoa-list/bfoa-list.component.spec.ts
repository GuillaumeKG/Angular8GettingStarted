import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfoaListComponent } from './bfoa-list.component';

describe('BfoaListComponent', () => {
  let component: BfoaListComponent;
  let fixture: ComponentFixture<BfoaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfoaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

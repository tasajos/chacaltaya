import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcasosComponent } from './rcasos.component';

describe('RcasosComponent', () => {
  let component: RcasosComponent;
  let fixture: ComponentFixture<RcasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcasosComponent]
    });
    fixture = TestBed.createComponent(RcasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

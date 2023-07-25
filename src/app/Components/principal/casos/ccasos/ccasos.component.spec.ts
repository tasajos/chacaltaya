import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcasosComponent } from './ccasos.component';

describe('CcasosComponent', () => {
  let component: CcasosComponent;
  let fixture: ComponentFixture<CcasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcasosComponent]
    });
    fixture = TestBed.createComponent(CcasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

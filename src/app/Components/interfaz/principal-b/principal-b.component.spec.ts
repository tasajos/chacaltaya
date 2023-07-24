import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBComponent } from './principal-b.component';

describe('PrincipalBComponent', () => {
  let component: PrincipalBComponent;
  let fixture: ComponentFixture<PrincipalBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalBComponent]
    });
    fixture = TestBed.createComponent(PrincipalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

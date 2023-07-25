import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcasosComponent } from './navbarcasos.component';

describe('NavbarcasosComponent', () => {
  let component: NavbarcasosComponent;
  let fixture: ComponentFixture<NavbarcasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarcasosComponent]
    });
    fixture = TestBed.createComponent(NavbarcasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaragendaComponent } from './navbaragenda.component';

describe('NavbaragendaComponent', () => {
  let component: NavbaragendaComponent;
  let fixture: ComponentFixture<NavbaragendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbaragendaComponent]
    });
    fixture = TestBed.createComponent(NavbaragendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

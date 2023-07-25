import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpersonalComponent } from './navbarpersonal.component';

describe('NavbarpersonalComponent', () => {
  let component: NavbarpersonalComponent;
  let fixture: ComponentFixture<NavbarpersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarpersonalComponent]
    });
    fixture = TestBed.createComponent(NavbarpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

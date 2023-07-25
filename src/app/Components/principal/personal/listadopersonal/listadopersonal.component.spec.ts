import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadopersonalComponent } from './listadopersonal.component';

describe('ListadopersonalComponent', () => {
  let component: ListadopersonalComponent;
  let fixture: ComponentFixture<ListadopersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadopersonalComponent]
    });
    fixture = TestBed.createComponent(ListadopersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

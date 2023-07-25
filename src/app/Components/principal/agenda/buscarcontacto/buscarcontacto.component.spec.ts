import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarcontactoComponent } from './buscarcontacto.component';

describe('BuscarcontactoComponent', () => {
  let component: BuscarcontactoComponent;
  let fixture: ComponentFixture<BuscarcontactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarcontactoComponent]
    });
    fixture = TestBed.createComponent(BuscarcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcontactoComponent } from './crearcontacto.component';

describe('CrearcontactoComponent', () => {
  let component: CrearcontactoComponent;
  let fixture: ComponentFixture<CrearcontactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearcontactoComponent]
    });
    fixture = TestBed.createComponent(CrearcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

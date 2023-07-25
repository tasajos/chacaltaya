import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpersonalComponent } from './crearpersonal.component';

describe('CrearpersonalComponent', () => {
  let component: CrearpersonalComponent;
  let fixture: ComponentFixture<CrearpersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearpersonalComponent]
    });
    fixture = TestBed.createComponent(CrearpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

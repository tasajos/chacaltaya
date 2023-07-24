import { TestBed } from '@angular/core/testing';

import { InicioInterfazService } from './inicio-interfaz.service';

describe('InicioInterfazService', () => {
  let service: InicioInterfazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioInterfazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

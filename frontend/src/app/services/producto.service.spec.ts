import { TestBed } from '@angular/core/testing';

import { NotasService } from './producto.service';

describe('ProductoService', () => {
  let service: NotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

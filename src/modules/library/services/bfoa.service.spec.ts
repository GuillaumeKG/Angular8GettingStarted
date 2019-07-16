import { TestBed } from '@angular/core/testing';

import { BfoaService } from './service';

describe('BfoaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BfoaService = TestBed.get(BfoaService);
    expect(service).toBeTruthy();
  });
});

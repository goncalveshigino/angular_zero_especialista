import { TestBed } from '@angular/core/testing';

import { DesoesService } from './desoes.service';

describe('DesoesService', () => {
  let service: DesoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

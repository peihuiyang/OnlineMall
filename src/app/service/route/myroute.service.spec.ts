import { TestBed } from '@angular/core/testing';

import { MyrouteService } from './myroute.service';

describe('MyrouteService', () => {
  let service: MyrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

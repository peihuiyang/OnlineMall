import { TestBed } from '@angular/core/testing';

import { HttpbaseService } from './httpbase.service';

describe('HttpbaseService', () => {
  let service: HttpbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

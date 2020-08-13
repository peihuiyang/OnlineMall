import { TestBed } from '@angular/core/testing';

import { MsgnoticeService } from './msgnotice.service';

describe('MsgnoticeService', () => {
  let service: MsgnoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgnoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MyDrawerService } from './my-drawer.service';

describe('MyDrawerService', () => {
  let service: MyDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

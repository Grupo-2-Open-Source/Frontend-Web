import { TestBed } from '@angular/core/testing';

import { RentdOwnerService } from './rentd-owner.service';

describe('RentdOwnerService', () => {
  let service: RentdOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentdOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

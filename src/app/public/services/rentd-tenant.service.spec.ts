import { TestBed } from '@angular/core/testing';

import { RentdTenantService } from './rentd-tenant.service';

describe('RentTenantService', () => {
  let service: RentdTenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentdTenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

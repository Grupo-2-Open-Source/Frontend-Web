import { TestBed } from '@angular/core/testing';

import { RequestTenantService } from './request-tenant.service';

describe('RequestTenantService', () => {
  let service: RequestTenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

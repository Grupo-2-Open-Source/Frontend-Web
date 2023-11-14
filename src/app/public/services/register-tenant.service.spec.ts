import { TestBed } from '@angular/core/testing';

import { RegisterTenantService } from './register-tenant.service';

describe('RegisterTenantService', () => {
  let service: RegisterTenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterTenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

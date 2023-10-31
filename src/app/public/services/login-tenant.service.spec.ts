import { TestBed } from '@angular/core/testing';

import { LoginTenantService } from './login-tenant.service';

describe('LoginTenantService', () => {
  let service: LoginTenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

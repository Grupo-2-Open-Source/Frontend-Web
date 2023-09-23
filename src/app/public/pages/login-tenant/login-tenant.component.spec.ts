import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTenantComponent } from './login-tenant.component';

describe('LoginTenantComponent', () => {
  let component: LoginTenantComponent;
  let fixture: ComponentFixture<LoginTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTenantComponent]
    });
    fixture = TestBed.createComponent(LoginTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

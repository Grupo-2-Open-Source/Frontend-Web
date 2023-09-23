import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordTenantComponent } from './recover-password-tenant.component';

describe('RecoverPasswordTenantComponent', () => {
  let component: RecoverPasswordTenantComponent;
  let fixture: ComponentFixture<RecoverPasswordTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverPasswordTenantComponent]
    });
    fixture = TestBed.createComponent(RecoverPasswordTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

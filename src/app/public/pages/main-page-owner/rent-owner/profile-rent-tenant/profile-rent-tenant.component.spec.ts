import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRentTenantComponent } from './profile-rent-tenant.component';

describe('ProfileRentTenantComponent', () => {
  let component: ProfileRentTenantComponent;
  let fixture: ComponentFixture<ProfileRentTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileRentTenantComponent]
    });
    fixture = TestBed.createComponent(ProfileRentTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

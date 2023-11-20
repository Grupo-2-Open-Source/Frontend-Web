import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTenantUpdateComponent } from './profile-tenant-update.component';

describe('ProfileTenantUpdateComponent', () => {
  let component: ProfileTenantUpdateComponent;
  let fixture: ComponentFixture<ProfileTenantUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileTenantUpdateComponent]
    });
    fixture = TestBed.createComponent(ProfileTenantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

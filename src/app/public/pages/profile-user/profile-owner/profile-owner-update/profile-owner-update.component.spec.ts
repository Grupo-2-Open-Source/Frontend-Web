import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOwnerUpdateComponent } from './profile-owner-update.component';

describe('ProfileOwnerUpdateComponent', () => {
  let component: ProfileOwnerUpdateComponent;
  let fixture: ComponentFixture<ProfileOwnerUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileOwnerUpdateComponent]
    });
    fixture = TestBed.createComponent(ProfileOwnerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

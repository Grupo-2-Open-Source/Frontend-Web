import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOwnerComponent } from './profile-owner.component';

describe('ProfileOwnerComponent', () => {
  let component: ProfileOwnerComponent;
  let fixture: ComponentFixture<ProfileOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileOwnerComponent]
    });
    fixture = TestBed.createComponent(ProfileOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

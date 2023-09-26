import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRegistrationOwnerComponent } from './vehicle-registration-owner.component';

describe('VehiculeRegistrationOwnerComponent', () => {
  let component: VehicleRegistrationOwnerComponent;
  let fixture: ComponentFixture<VehicleRegistrationOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleRegistrationOwnerComponent]
    });
    fixture = TestBed.createComponent(VehicleRegistrationOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

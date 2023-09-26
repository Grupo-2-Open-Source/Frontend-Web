import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTenantComponent } from './rent-tenant.component';

describe('RentTenantComponent', () => {
  let component: RentTenantComponent;
  let fixture: ComponentFixture<RentTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentTenantComponent]
    });
    fixture = TestBed.createComponent(RentTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTenantComponent } from './maintenance-tenant.component';

describe('MaintenanceTenantComponent', () => {
  let component: MaintenanceTenantComponent;
  let fixture: ComponentFixture<MaintenanceTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenanceTenantComponent]
    });
    fixture = TestBed.createComponent(MaintenanceTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

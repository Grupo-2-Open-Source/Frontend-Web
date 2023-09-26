import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTenantComponent } from './request-tenant.component';

describe('RequestTenantComponent', () => {
  let component: RequestTenantComponent;
  let fixture: ComponentFixture<RequestTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestTenantComponent]
    });
    fixture = TestBed.createComponent(RequestTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

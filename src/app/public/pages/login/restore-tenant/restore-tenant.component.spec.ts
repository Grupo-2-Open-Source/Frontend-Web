import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreTenantComponent } from './restore-tenant.component';

describe('RestoreTenantComponent', () => {
  let component: RestoreTenantComponent;
  let fixture: ComponentFixture<RestoreTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestoreTenantComponent]
    });
    fixture = TestBed.createComponent(RestoreTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAutoTenantComponent } from './share-auto-tenant.component';

describe('ShareAutoTenantComponent', () => {
  let component: ShareAutoTenantComponent;
  let fixture: ComponentFixture<ShareAutoTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareAutoTenantComponent]
    });
    fixture = TestBed.createComponent(ShareAutoTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

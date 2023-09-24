import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTenantComponent } from './main-page-tenant.component';

describe('MainPageTenantComponent', () => {
  let component: MainPageTenantComponent;
  let fixture: ComponentFixture<MainPageTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageTenantComponent]
    });
    fixture = TestBed.createComponent(MainPageTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



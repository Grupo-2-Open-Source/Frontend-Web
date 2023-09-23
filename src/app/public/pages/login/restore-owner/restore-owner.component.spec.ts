import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreOwnerComponent } from './restore-owner.component';

describe('RestoreOwnerComponent', () => {
  let component: RestoreOwnerComponent;
  let fixture: ComponentFixture<RestoreOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestoreOwnerComponent]
    });
    fixture = TestBed.createComponent(RestoreOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

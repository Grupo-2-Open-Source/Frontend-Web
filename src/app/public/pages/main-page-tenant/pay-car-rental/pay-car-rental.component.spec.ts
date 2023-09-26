import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCarRentalComponent } from './pay-car-rental.component';

describe('PayCarRentalComponent', () => {
  let component: PayCarRentalComponent;
  let fixture: ComponentFixture<PayCarRentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayCarRentalComponent]
    });
    fixture = TestBed.createComponent(PayCarRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

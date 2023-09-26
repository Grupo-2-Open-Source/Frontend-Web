import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOwnerComponent } from './rent-owner.component';

describe('RentOwnerComponent', () => {
  let component: RentOwnerComponent;
  let fixture: ComponentFixture<RentOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentOwnerComponent]
    });
    fixture = TestBed.createComponent(RentOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

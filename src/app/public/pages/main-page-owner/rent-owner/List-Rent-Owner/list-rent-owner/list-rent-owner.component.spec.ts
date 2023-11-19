import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRentOwnerComponent } from './list-rent-owner.component';

describe('ListRentOwnerComponent', () => {
  let component: ListRentOwnerComponent;
  let fixture: ComponentFixture<ListRentOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRentOwnerComponent]
    });
    fixture = TestBed.createComponent(ListRentOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

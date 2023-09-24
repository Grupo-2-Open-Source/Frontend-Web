import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsOwnerComponent } from './notifications-owner.component';

describe('NotificationsOwnerComponent', () => {
  let component: NotificationsOwnerComponent;
  let fixture: ComponentFixture<NotificationsOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsOwnerComponent]
    });
    fixture = TestBed.createComponent(NotificationsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

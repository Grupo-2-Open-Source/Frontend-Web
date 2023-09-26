import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageOwnerComponent } from './main-page-owner.component';

describe('MainPageOwnerComponent', () => {
  let component: MainPageOwnerComponent;
  let fixture: ComponentFixture<MainPageOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageOwnerComponent]
    });
    fixture = TestBed.createComponent(MainPageOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

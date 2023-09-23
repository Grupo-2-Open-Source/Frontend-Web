import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordOwnerComponent } from './recover-password-owner.component';

describe('RecoverPasswordOwnerComponent', () => {
  let component: RecoverPasswordOwnerComponent;
  let fixture: ComponentFixture<RecoverPasswordOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverPasswordOwnerComponent]
    });
    fixture = TestBed.createComponent(RecoverPasswordOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

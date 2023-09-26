import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractOwnerComponent } from './create-contract-owner.component';

describe('CreateContractOwnerComponent', () => {
  let component: CreateContractOwnerComponent;
  let fixture: ComponentFixture<CreateContractOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateContractOwnerComponent]
    });
    fixture = TestBed.createComponent(CreateContractOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

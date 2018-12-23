import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCustomerComponent } from './edite-customer.component';

describe('EditeCustomerComponent', () => {
  let component: EditeCustomerComponent;
  let fixture: ComponentFixture<EditeCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMultipleComponent } from './box-multiple.component';

describe('BoxMultipleComponent', () => {
  let component: BoxMultipleComponent;
  let fixture: ComponentFixture<BoxMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

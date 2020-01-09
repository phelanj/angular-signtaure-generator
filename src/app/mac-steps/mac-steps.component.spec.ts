import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacStepsComponent } from './mac-steps.component';

describe('MacStepsComponent', () => {
  let component: MacStepsComponent;
  let fixture: ComponentFixture<MacStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileFormComponent } from './automobile-form.component';

describe('AutomobileFormComponent', () => {
  let component: AutomobileFormComponent;
  let fixture: ComponentFixture<AutomobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

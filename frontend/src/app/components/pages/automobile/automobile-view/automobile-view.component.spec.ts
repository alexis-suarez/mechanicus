import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileViewComponent } from './automobile-view.component';

describe('AutomobileViewComponent', () => {
  let component: AutomobileViewComponent;
  let fixture: ComponentFixture<AutomobileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCalendarComponent } from './info-calendar.component';

describe('InfoCalendarComponent', () => {
  let component: InfoCalendarComponent;
  let fixture: ComponentFixture<InfoCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

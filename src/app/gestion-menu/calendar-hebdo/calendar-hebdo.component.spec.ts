import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarHebdoComponent } from './calendar-hebdo.component';

describe('CalendarHebdoComponent', () => {
  let component: CalendarHebdoComponent;
  let fixture: ComponentFixture<CalendarHebdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarHebdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarHebdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

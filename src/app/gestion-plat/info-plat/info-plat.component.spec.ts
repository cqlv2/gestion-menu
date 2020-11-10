import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlatComponent } from './info-plat.component';

describe('InfoPlatComponent', () => {
  let component: InfoPlatComponent;
  let fixture: ComponentFixture<InfoPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

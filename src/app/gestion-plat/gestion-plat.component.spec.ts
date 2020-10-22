import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPlatComponent } from './gestion-plat.component';

describe('GestionPlatComponent', () => {
  let component: GestionPlatComponent;
  let fixture: ComponentFixture<GestionPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

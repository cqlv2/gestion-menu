import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauPlatsComponent } from './tableau-plats.component';

describe('TableauPlatsComponent', () => {
  let component: TableauPlatsComponent;
  let fixture: ComponentFixture<TableauPlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauPlatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

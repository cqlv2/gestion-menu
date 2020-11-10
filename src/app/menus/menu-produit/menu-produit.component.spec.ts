import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProduitComponent } from './menu-produit.component';

describe('MenuProduitComponent', () => {
  let component: MenuProduitComponent;
  let fixture: ComponentFixture<MenuProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

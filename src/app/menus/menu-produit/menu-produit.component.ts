import { Component, OnInit } from '@angular/core';
import { Filters } from 'src/app/models/filters';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-menu-produit',
  templateUrl: './menu-produit.component.html',
  styleUrls: ['./menu-produit.component.css']
})
export class MenuProduitComponent implements OnInit {

  public isCollapsed = true;
  public filtreCategorie: string = "";
  public filtreMagasin: string = "";
  public recherche: string = "";

  enumCategories: string[];
  enumMagasins: string[];

  filters: Filters;

  constructor(private prServ: ProduitService) {

  }

  ngOnInit(): void {
    this.prServ.getFromEnumSub().subscribe(
      enums => {
        this.enumCategories = enums.categories;
        this.enumMagasins = enums.Magasins;
      },
      err => console.log(err),
      () => { }
    );
  }

  setFilters() {
    let filter: Filters = new Filters();
    filter.categorie = this.filtreCategorie;
    filter.magasin = this.filtreMagasin;
    filter.recherche = this.recherche;
    this.prServ.sendToFilterSub(filter);
  }

}

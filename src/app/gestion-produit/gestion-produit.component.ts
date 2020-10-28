import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {

  // variables
  public isCollapsed = true;
  public listeProduit: Produit[];
  public infoProduit: Produit = null;
  public filtreCategorie: string = "tout";
  public filtreMagasin: string = "tout";
  public recherche: string = "";
  public listeCategorie: string[];
  public listeMagasin: string;


  public acProduits: Produit[]=[];



  // init
  constructor(private prServ: ProduitService) {
    prServ.getAllProduits().subscribe(data => prServ.sendToProduitsSub(data));
  }

  ngOnInit(): void {
    this.prServ.getFromPrSub().subscribe(prod => this.infoProduit = prod) 
    this.prServ.getFromProduitsSub().subscribe(data =>  this.listeProduit = data)
    
    this.prServ.getAllEnum().subscribe(e => {
      this.listeCategorie = e.categories;
      this.listeMagasin = e.Magasins;
    })
  }

  // methods
  loadInfo(id: number) {
    this.prServ.getProduitById(id).subscribe(data => this.prServ.sendToPrSub(data));
  }

  majList() {
    this.prServ.getProduitBy(this.filtreMagasin, this.filtreCategorie).subscribe(data => this.listeProduit = data);
  }

  search() {  
   
      this.prServ.search(this.recherche).subscribe(ac=>{
        this.prServ.sendToProduitsSub(ac);
      });
  
    
    
    
    
    

  }


}

import { Component, OnInit } from '@angular/core';
import { Filters } from 'src/app/models/filters';

//models
import { Produit } from "../../models/produit";
//services


import { ProduitService } from "../../service/produit.service";
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  listeProduits: Produit[]
  selected:number=null;
  filters: Filters;
  constructor(private prServ: ProduitService) {
    this.prServ.getAllProduits().subscribe(
      prods=>this.listeProduits=prods,
      err=>console.log(err),
      ()=>{}
    );
   }

  ngOnInit(): void {
    //abonement au produitsSubject
this.prServ.getFromProduitsSub().subscribe(
  list=>this.listeProduits=list,
  err=>console.log(err)
);
    
    //envoie de la liste de produits dans le sub selon les filtres
    this.prServ.getFromFiltersSub().subscribe(
      filters => this.prServ.getListProduits(filters).subscribe(
        prods => {
         this.prServ.sendToProduitsSub(prods);
          this.listeProduits = prods;
        },
        err => console.log(err),
        () => { }
      ),
      err => console.log(err),
      () => { }
    );
    //recup du produit dans le subProduit
    console.log("azeaze");
    this.prServ.getFromPrSub().subscribe(
      pr=>{        
        if(pr!=null) this.selected=pr.id;
        else this.selected=null;
      },
      err=>console.log("erreur : "+err),
      ()=>{}
    );
  }

  onSelect(id:number){
    this.selected=id;
    this.prServ.getProduitById(id).subscribe(
      pr=>{
        this.prServ.sendToPrSub(pr);
      },
      err=>console.log(err),
      ()=>{}
    );

  
  
  
  }




}
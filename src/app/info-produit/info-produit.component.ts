import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { Produit } from '../models/produit';




@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.css']
})
export class InfoProduitComponent implements OnInit {

  infoProduit: Produit = null;
  constructor(private prServ: ProduitService) { }

  ngOnInit(): void {
    this.prServ.getFromPrSub().subscribe(data => this.infoProduit = data);
  }

  viderInfo(){
    this.infoProduit=null;
    this.prServ.sendToPrSub(null);
  }


}

import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {


  constructor(private prServ: ProduitService) {
    prServ.getAllEnum().subscribe(enums => prServ.sendToEnumSub(enums));
}

  ngOnInit(): void {}

}
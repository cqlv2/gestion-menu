import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filters } from 'src/app/models/filters';
import { Produit } from 'src/app/models/produit';
import { PlatService } from 'src/app/service/plat.service';
import { ProduitService } from 'src/app/service/produit.service';
import { Plat } from '../models/plat';
import { PlatReq } from '../models/platReq';

@Component({
  selector: 'app-form-plat',
  templateUrl: './form-plat.component.html',
  styleUrls: ['./form-plat.component.css']
})
export class FormPlatComponent implements OnInit {

  plat: Plat = new Plat();
  id: number;
  produits: Produit[];
  searchProd: string = null;
  listePrAc: Produit[];

  constructor(private plServ: PlatService, private prServ: ProduitService, private route: ActivatedRoute, private router: Router) {
    this.prServ.getAllProduits().subscribe(
      produits => this.produits = produits,
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"))

    this.prServ.getFromProduitsSub().subscribe(
      produits => this.produits = produits,
      err => console.log(err)
    );

    if (this.id > 0) {
      this.plServ.getById(this.id).subscribe(
        plat => this.plat = plat,
        err => console.log(err)
      );
    }
  }


  addProd() {
    document.getElementById("btnAdd").classList.add("d-none");
    document.getElementById("inputProd").classList.remove('d-none');

  }

  genProduitAc() {
    let acProd = document.getElementById('acProd');
    if (this.searchProd != null && this.searchProd != "") {
      acProd.classList.remove('d-none')
    } else {
      acProd.classList.add('d-none')
    }
    let filtre = new Filters();
    filtre.recherche = this.searchProd;
    this.prServ.getListProduits(filtre).subscribe(
      prods => this.listePrAc = prods,
      err => console.log(err)
    );
  }


  selectProd(prod) {

    this.plat.produits.push(prod);
    document.getElementById("btnAdd").classList.remove("d-none");
    document.getElementById("inputProd").classList.add('d-none');

  }

  remProd(plat) {
    this.plat.produits.splice(this.plat.produits.indexOf(plat), 1)
  }

  addEditPlat() {
    let newPlat = new PlatReq();
    if (this.plat.id != 0)
      newPlat.id = this.plat.id;
    newPlat.nom = this.plat.nom;
    newPlat.note = this.plat.note
    this.plat.produits.forEach(prod => {
      newPlat.produitsId.push(prod.id);
    });
    this.plServ.addEdit(newPlat).subscribe(
      plat => {
        this.plServ.sendToPlatSub(plat)
        this.plServ.getALLplats().subscribe(
          listPl => this.plServ.sendToListplateSub(listPl),
          err => console.log(err)
        );
      },
      err => console.log(err)
    );
    this.router.navigateByUrl('/plat/info');
  }

}

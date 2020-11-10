import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Filters } from 'src/app/models/filters';
//models
import { NewProduitDto } from '../../models/newProduitDto';
import { Produit } from '../../models/produit';
//services
import { ProduitService } from '../../service/produit.service';

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit.component.html',
  styleUrls: ['./form-produit.component.css']
})
export class FormProduitComponent implements OnInit {

  inModal: boolean = false;
  infoProduit: Produit = null;


  id: number;
  nom: string;
  categorie: string;
  emballage: string;
  poidsConditionnement: number;
  uniteConditionnement: string;
  prix: number;
  prixKg: number;
  magasin: string;
  quantite: number;
  unite: string;
  enumCat: string[];
  enumUnite: string[];
  enumCondit: string[];
  enumMagasin: string[];

  filters:Filters=new Filters;
  constructor(private prServ: ProduitService, private route: ActivatedRoute, private router: Router) {
    this.prServ.getFromFiltersSub().subscribe(
      filters => this.filters=filters,
      err => console.log("erreur PR3 : " + err),
      () => console.log("fin PR3")
    );
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
    if (this.id > 0) {
      this.prServ.getProduitById(this.id).subscribe(data => {
        this.nom = data.libelle;
        this.categorie = data.categorie;
        this.emballage = data.conditionnement.emballage;
        this.poidsConditionnement = data.conditionnement.poids;
        this.uniteConditionnement = data.conditionnement.unite
        this.prix = data.prix;
        this.prixKg = data.prixKg;
        this.magasin = data.magasin;
        this.quantite = data.quantiteParPersonne;
        this.unite = data.unite;
      })
    }
    //
    this.prServ.getFromFiltersSub().subscribe(
      filters => this.filters=filters,
      err => console.log("erreur PR3 : " + err),
      () => console.log("fin PR3")
    );
    //
    this.prServ.getAllEnum().subscribe(e => {
      this.enumCat = e.categories;
      this.enumMagasin = e.Magasins;
      this.enumCondit = e.conditionnements;
      this.enumUnite = e.unites;

    });


  }



  save(isNew: boolean) {

    let prDto = new NewProduitDto();
    if (!isNew) prDto.id = this.id;
    prDto.libelle = this.nom;
    prDto.categorie = this.categorie;
    prDto.emballage = this.emballage;
    prDto.poidsCond = this.poidsConditionnement;
    prDto.uniteCond = this.uniteConditionnement;
    prDto.prix = this.prix;
    prDto.prixKg = this.prixKg;
    prDto.magasin = this.magasin;
    prDto.quantiteParPersonne = this.quantite;
    prDto.unite = this.unite;
    if (isNew) {
      this.prServ.addNew(prDto).subscribe(
        produit => {
          this.prServ.sendToPrSub(produit)
          this.prServ.getListProduits(this.filters).subscribe(
            listPr => this.prServ.sendToProduitsSub(listPr),
            err => console.log("erreur PR3 : " + err),
            () => console.log("fin PR3")
          );
        },
        err => console.log("erreur PR1 : " + err),
        () => console.log("fin PR1")
      );
    }
    else {
      this.prServ.edit(prDto).subscribe(
        produit => {
          this.prServ.sendToPrSub(produit)
          this.prServ.getListProduits(this.filters).subscribe(
            listPr => this.prServ.sendToProduitsSub(listPr),
            err => console.log("erreur PR3 : " + err),
            () => console.log("fin PR3")
          );
        },
        err => console.log("erreur PR1 : " + err),
        () => console.log("fin PR1")
      );
    }
    this.router.navigateByUrl('/produit/info');
  }
}

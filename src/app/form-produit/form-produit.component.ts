import { Component, OnInit, ɵConsole } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitService } from '../service/produit.service';
import { ActivatedRoute } from '@angular/router';
import { NewProduitDto } from '../models/newProduitDto';
import { Router } from '@angular/router';



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

  constructor(private prServ: ProduitService, private route: ActivatedRoute, private router: Router) {


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
console.log(prDto);

    if (isNew) {
      this.prServ.addNew(prDto).subscribe(data => {
        this.prServ.sendToPrSub(data);
      });
    }
    else {
    
      this.prServ.edit(prDto).subscribe(data => {
        this.prServ.sendToPrSub(data);
      });
    }
    this.router.navigateByUrl('/produit/info');
  }
}

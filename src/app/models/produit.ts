import {Conditionnement} from'./conditionnement';


export class Produit {
    id:number
    conditionnement:Conditionnement
    libelle:string
    categorie:string
    prix:number
    prixKg:number
    magasin:string
    quantiteParPersonne:number
    unite:string
    ajouterLe?: Date
    majLe?: Date
}



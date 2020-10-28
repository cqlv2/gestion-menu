export class NewProduitDto {
    id?:number;
    emballage:string
    poidsCond: number
    uniteCond: string
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
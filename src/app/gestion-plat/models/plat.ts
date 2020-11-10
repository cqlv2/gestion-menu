import { Produit } from 'src/app/models/produit'

export class Plat{
    id?:number
    nom:string
    note: number
    produits: Produit[]=[]
}
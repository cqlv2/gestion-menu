import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Produit } from '../models/produit';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProduitDto } from "../models/produitDto";
import { NewProduitDto } from "../models/newProduitDto";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produitSub = new Subject<Produit>();
  produitsSub = new Subject<Produit[]>();


  constructor(private http: HttpClient) {

  }

  getAllProduits() {
    return this.http.get<Produit[]>("http://localhost:8080/produit");
  }

  getProduitBy(mag: string, cat: string) {
    let url: string = "http://localhost:8080/produit";
    if (mag != "tout" && cat != "tout") url += "?cat=" + cat + "&mag=" + mag;
    else if (mag == "tout" && cat != "tout") url += "?type=categorie&value=" + cat;
    else if (mag != "tout" && cat == "tout") url += "?type=magasin&value=" + mag;
    return this.http.get<Produit[]>(url);
  }

  getProduitById(id: number) {
    return this.http.get<Produit>("http://localhost:8080/produit?id=" + id);
  }

  getAllEnum() {
    return this.http.get<any>("http://localhost:8080/produit/enums");
  }

  addNew(newProduitDto: NewProduitDto) {
   
    
    return this.http.post<any>("http://localhost:8080/produit", newProduitDto);
  }

  edit(produitDto: NewProduitDto) {
    return this.http.put<any>("http://localhost:8080/produit", produitDto);
  }

  search(word) {
    return this.http.get<Produit[]>("http://localhost:8080/produit?type=libelle&value="+word);
  }



  sendToPrSub(produit: Produit) {
    this.produitSub.next(produit);
  }

  sendToProduitsSub(produit: Produit[]) {
    this.produitsSub.next(produit);
  }

  getFromPrSub() {
    return this.produitSub.asObservable();
  }
  getFromProduitsSub() {
    return this.produitsSub.asObservable();
  }



}

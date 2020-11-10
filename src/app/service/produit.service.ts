import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { NewProduitDto } from "../models/newProduitDto";
import { Produit } from '../models/produit';
import { Filters } from "../models/filters";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produitSub = new Subject<Produit>();
  produitsSub = new Subject<Produit[]>();
  filterSub = new Subject<Filters>();
  enumSub = new Subject<any>();
  constructor(private http: HttpClient) {
  }

  getAllProduits() {
    return this.http.get<Produit[]>("http://localhost:8080/produit");
  }

  getListProduits(filters: Filters) {
    let url = "http://localhost:8080/produit/filter";
    if (filters.magasin != "") {
      console.log(filters.magasin);
      
      if (url.indexOf("?") == -1) url += "?";
      else url += "&";
      url += "magasin=" + filters.magasin;
    }

    if (filters.categorie != "") {
      if (url.indexOf("?") == -1) url += "?";
      else url += "&";
      url += "categorie=" + filters.categorie;
    }

    if (filters.recherche != "") {
      if (url.indexOf("?") == -1) url += "?";
      else url += "&";
      url += "search=" + filters.recherche;
    }
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


  // get/set subject

  sendToPrSub(produit: Produit) {
    this.produitSub.next(produit);
  }

  sendToProduitsSub(produit: Produit[]) {
    this.produitsSub.next(produit);
  }

  sendToFilterSub(filters: Filters) {
    this.filterSub.next(filters);
  }

  sendToEnumSub(enums: any) {
    this.enumSub.next(enums);
  }

  getFromPrSub() {
    return this.produitSub.asObservable();
  }
  getFromProduitsSub() {
    return this.produitsSub.asObservable();
  }

  getFromFiltersSub() {
    return this.filterSub.asObservable();
  }

  getFromEnumSub() {
    return this.enumSub.asObservable();
  }

}

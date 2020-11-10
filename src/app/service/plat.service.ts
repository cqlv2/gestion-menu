import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Plat } from '../gestion-plat/models/plat';
import { PlatReq } from '../gestion-plat/models/platReq';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  listPlatsSub = new Subject<Plat[]>();
  platSub = new Subject<Plat>();

  constructor(private http: HttpClient) { }

  getALLplats() {
    return this.http.get<Plat[]>("http://localhost:8080/plat");
  }

  getById(id: number) {
    return this.http.get<Plat>("http://localhost:8080/plat?id=" + id);
  }

  addEdit(newPlat: PlatReq) {
    if (newPlat.id > 0) return this.http.put<any>("http://localhost:8080/plat", newPlat);
    else return this.http.post<any>("http://localhost:8080/plat", newPlat);
  }

  // get/set subject
  sendToListplateSub(plat: Plat[]) {
    this.listPlatsSub.next(plat);
  }
  sendToPlatSub(plat: Plat) {
    this.platSub.next(plat);
  }

  getFromListplateSub() {
    return this.listPlatsSub.asObservable();
  }
  getFromPlatSub() {
    return this.platSub.asObservable();
  }

}
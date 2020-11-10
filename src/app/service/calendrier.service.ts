import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { JourCalendar } from '../gestion-menu/model/jourCalendar';
import { Menu } from '../gestion-menu/model/menu';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  tabJourMois: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  calendrierSub = new Subject<JourCalendar[]>();
  listeMenuSub = new Subject<Menu[]>();
  dateSub=new Subject<Date>();



  constructor(private http: HttpClient) { }

  getMenuMois(mois: number, annee: number) {
    if (annee % 4 == 0) this.tabJourMois[1] == 29;
    else this.tabJourMois[1] == 28;
    let moisStr = null;
    if (Number(mois) + 1 <= 9) moisStr = "0" + (Number(mois) + 1)
    else moisStr = Number(mois) + 1;
    let date1 = annee + "-" + (moisStr) + "-01";
    let date2 = annee + "-" + (moisStr) + "-" + this.tabJourMois[mois];
    return this.http.get<Menu[]>("http://localhost:8080/menu?date1=" + date1 + "&date2=" + date2);
  }

  getMenuByDate(date:Date){
    let j=date.getDate();
    let m=date.getMonth()+1;
    let a=date.getFullYear();
    let dateSql=String(a)+"-";
    if(m<10) dateSql+="0"+String(m)+"-";
    else dateSql+=String(m)+"-";
    if(j<10) dateSql+="0"+String(j);
    else dateSql+=String(j);
    return this.http.get<Menu>("http://localhost:8080/menu?day="+dateSql);
  }



  sendToCalendrierSub(calendrier: JourCalendar[]) {
    this.calendrierSub.next(calendrier);
  }
  sendToListMenuSub(list: Menu[]) {
    this.listeMenuSub.next(list);
  }
  sendToDateSub(date:Date){
    this.dateSub.next(date);
  }

  getFromCalendrierSub() {
    return this.calendrierSub.asObservable();
  }

  getFromListMenuSub() {
    return this.listeMenuSub.asObservable();
  }
  getFromDateSub(){
    return this.dateSub.asObservable();
  }


  genCalendar(mois: number, annee: number, listMenus: Menu[], weekStartMonday:boolean=true) {
    //initialisation du tableau du calendrier
    let tabCalendar: JourCalendar[] = [];
    //init de la valeur "jour"
    let jour: number = 1;
    //verification si bissextile 
    if (annee % 4 == 0) this.tabJourMois[1] == 29;
    else this.tabJourMois[1] == 28;
    //recuperation du premier jour de la semaine
    let firstDay: number = new Date(annee, mois, 1).getDay();
    if (weekStartMonday) {
      if (firstDay > 0) firstDay--;
      else firstDay = 6;
    }
    for (let i = 0; i < 42; i++) {
      //si i est plus petit que le premier jour de la semaine du mois 
      //l'entrée i du tableau vaut null
      if (i < firstDay) {
        tabCalendar.push(null)
      }
      //si jour est plus grand que le nombre de jour du mois 
      //l'entrée i du tableau vaut null
      else if (jour > this.tabJourMois[mois]) {
        tabCalendar.push(null)
      }
      //sinon on ajoute a l'entrée i du tableau une instence de JourCalendar
      else {
        // creation instence de jourCalendar
        let newJour = new JourCalendar();
        newJour.date = new Date(annee, mois, jour);

        listMenus.forEach(menu => {
          if (new Date(menu.date).getDate() == newJour.date.getDate()) {
            if (menu.midi1 != null) newJour.midi1 = true;
            if (menu.midi2 != null) newJour.midi2 = true;
            if (menu.soir1 != null) newJour.soir1 = true;
            if (menu.soir2 != null) newJour.soir2 = true;
          }
        });
        tabCalendar.push(newJour);
        //incrementation de jour
        jour++;
      }
    }

    //separation du tableau en 6 semaines
    let splitCalendar = [];
    for (let i = 0; i < 6; i++) {
      let c = tabCalendar.splice(0, 7);
      splitCalendar.push(c);
    }
    // supperssion de la derniere semaine si vide
    if (splitCalendar[5][0] == null)
      splitCalendar.splice(5, 1);
    // envoie du calendrier generer        
    return splitCalendar;
  }






  //generation du calendier
  initCalendar(annee: number, mois: number, weekStartMonday: boolean = true) {
    //initialisation du tableau du calendrier
    let tabCalendar: JourCalendar[] = [];
    // recup des menus du mois en cours
    this.getMenuMois(mois, annee).subscribe(
      listeMenus => {
        //init de la valeur "jour"
        let jour: number = 1;
        //verification si bissextile 
        if (annee % 4 == 0) this.tabJourMois[1] == 29;
        else this.tabJourMois[1] == 28;
        //recuperation du premier jour de la semaine
        let firstDay: number = new Date(annee, mois, 1).getDay();
        if (weekStartMonday) {
          if (firstDay > 0) firstDay--;
          else firstDay = 6;
        }
        for (let i = 0; i < 42; i++) {
          //si i est plus petit que le premier jour de la semaine du mois 
          //l'entrée i du tableau vaut null
          if (i < firstDay) {
            tabCalendar.push(null)
          }
          //si jour est plus grand que le nombre de jour du mois 
          //l'entrée i du tableau vaut null
          else if (jour > this.tabJourMois[mois]) {
            tabCalendar.push(null)
          }
          //sinon on ajoute a l'entrée i du tableau une instence de JourCalendar
          else {
            // creation instence de jourCalendar
            let newJour = new JourCalendar();
            newJour.date = new Date(annee, mois, jour);

            listeMenus.forEach(menu => {
              if (new Date(menu.date).getDate() == newJour.date.getDate()) {
                if (menu.midi1 != null) newJour.midi1 = true;
                if (menu.midi2 != null) newJour.midi2 = true;
                if (menu.soir1 != null) newJour.soir1 = true;
                if (menu.soir2 != null) newJour.soir2 = true;
              }
            });
            tabCalendar.push(newJour);
            //incrementation de jour
            jour++;
          }
        }

      },
      err => console.log(err)
    );
    //separation du tableau en 6 semaines
    let splitCalendar = [];
    for (let i = 0; i < 6; i++) {
      let c = tabCalendar.splice(0, 7);
      splitCalendar.push(c);
    }
    // supperssion de la derniere semaine si vide
    if (splitCalendar[5][0] == null)
      splitCalendar.splice(5, 1);
    // envoie du calendrier generer        
    return splitCalendar;
  }
}

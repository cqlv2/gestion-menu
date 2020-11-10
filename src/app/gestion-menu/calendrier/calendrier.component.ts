import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendrierService } from 'src/app/service/calendrier.service';
import { JourCalendar } from '../model/jourCalendar';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  listeJourSemaine: any[] = [["Lun", 0], ["Mar", 1], ["Mer", 2], ["Jeu", 3], ["Ven", 4], ["Sam", 5], ["Dim", 6]];
  listeMois: any[] = [["Janvier", 0], ["Fervier", 1], ["Mars", 2], ["Avril", 3], ["mai", 4], ["juin", 5], ["Juillet", 6], ["Aout", 7], ["Septembre", 8], ["Octobre", 9], ["Novembre", 10], ["Decmbre", 11]];
  listeAnnee: number[] = [];

  today: Date = new Date();
  dateSelect: Date = this.today;
  showMonth: number = this.today.getMonth();
  showYears: number = this.today.getFullYear();

  calendar: JourCalendar[];
  menuMois: Menu[];


  constructor(private calServ: CalendrierService, private route:ActivatedRoute, private router:Router) {
    this.calServ.getFromDateSub().subscribe(
      date=>this.dateSelect=date,
      err=>console.log(err)
    );
    
    
    this.calServ.sendToDateSub(this.dateSelect);
    this.calServ.getMenuMois(this.showMonth, this.showYears).subscribe(
      listMenus => this.calendar = this.calServ.genCalendar(this.showMonth, this.showYears, listMenus),
      err => console.log(err)
    );

    //generation des option pour select annee
    for (let i = 0; i < 6; i++) {
      this.listeAnnee.push(this.today.getFullYear() + i);
    }
  }

  ngOnInit(): void {
 
    this.calServ.getFromCalendrierSub().subscribe(
      cal => this.calendar = cal,
      err => console.log(err)
    );
  }

  prevMonth() {
    this.showMonth--;
    if (this.showMonth < 0) {
      this.showMonth = 11;
      this.showYears--;
    }
    this.calServ.getMenuMois(this.showMonth, this.showYears).subscribe(
      listMenus => this.calServ.sendToCalendrierSub(this.calServ.genCalendar(this.showMonth, this.showYears, listMenus)),
      err => console.log(err)
    );
  }


  nextMonth() {
    this.showMonth++;
    if (this.showMonth > 11) {
      this.showMonth = 0;
      this.showYears++;
    }
    this.calServ.getMenuMois(this.showMonth, this.showYears).subscribe(
      listMenus => this.calServ.sendToCalendrierSub(this.calServ.genCalendar(this.showMonth, this.showYears, listMenus)),
      err => console.log(err)
    );
  }

  checkDate() {
    this.calServ.getMenuMois(this.showMonth, this.showYears).subscribe(
      listMenus => this.calServ.sendToCalendrierSub(this.calServ.genCalendar(this.showMonth, this.showYears, listMenus)),
      err => console.log(err)
    );
  }


  selectDate(date: Date) {
    this.router.navigateByUrl('/menu/info');

    this.dateSelect = date;
    this.calServ.sendToDateSub(date);
  }




}

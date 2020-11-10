import { Component, OnInit } from '@angular/core';
import { CalendrierService } from 'src/app/service/calendrier.service';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-info-calendar',
  templateUrl: './info-calendar.component.html',
  styleUrls: ['./info-calendar.component.css']
})
export class InfoCalendarComponent implements OnInit {

  date: Date;
  menu: Menu = new Menu();
  
  constructor(private calServ: CalendrierService) {
    this.date = new Date();
    this.calServ.getMenuByDate(this.date).subscribe(
      menu => this.menu = menu,
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    this.calServ.getFromDateSub().subscribe(
      date => {
        this.date = date
        this.calServ.getMenuByDate(date).subscribe(
          menu => this.menu = menu,
          err => console.log(err)
        );
      },
      err => console.log(err)
    );
  }

}

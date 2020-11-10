import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/gestion-plat/models/plat';
import { CalendrierService } from 'src/app/service/calendrier.service';
import { PlatService } from 'src/app/service/plat.service';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {


  dateSelect: Date;
  listePlat: Plat[];
  menu: Menu = new Menu();



  constructor(private plServ: PlatService, private calServ: CalendrierService) {
    this.calServ.getFromDateSub().subscribe(
      date => {
        console.log(date);
        this.dateSelect = date;
        this.calServ.getMenuByDate(date).subscribe(
          menu => this.menu = menu,
          err => console.log("erreur : "+err)
        );
      },
      err => console.log(err)
    );



    this.plServ.getALLplats().subscribe(
      plats => this.listePlat = plats,
      err => console.log(err)

    );


  }

  ngOnInit(): void {
   

  }

}

import { Component, OnInit } from '@angular/core';

import { Plat } from '../models/plat'

import { PlatService } from '../../service/plat.service';
@Component({
  selector: 'app-tableau-plats',
  templateUrl: './tableau-plats.component.html',
  styleUrls: ['./tableau-plats.component.css']
})
export class TableauPlatsComponent implements OnInit {

  listePlat: Plat[];
  selected: number;
  plat: Plat = null;

  constructor(private plServ: PlatService) {
    this.plServ.getALLplats().subscribe(
      plats => this.plServ.sendToListplateSub(plats),
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    this.plServ.getFromListplateSub().subscribe(
      listPlat => this.listePlat = listPlat,
      err => console.log(err)
    );
    this.plServ.getFromPlatSub().subscribe(
      plat => {
        this.plat = plat;
        if (plat != null)
          this.selected = plat.id;
        else this.selected = null;
      },
      err => console.log(err)
    );




  }

  onSelect(id) {
    this.selected = id;
    this.plServ.getById(id).subscribe(
      plat => this.plServ.sendToPlatSub(plat),
      err => console.log(err)
    );

  }

}

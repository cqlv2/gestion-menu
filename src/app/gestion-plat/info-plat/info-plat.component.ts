import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/service/plat.service';
import { Plat } from '../models/plat';

@Component({
  selector: 'app-info-plat',
  templateUrl: './info-plat.component.html',
  styleUrls: ['./info-plat.component.css']
})
export class InfoPlatComponent implements OnInit {
  plat: Plat = null;
  constructor(private plServ: PlatService) { }

  ngOnInit(): void {
    this.plServ.getFromPlatSub().subscribe(
      plat => this.plat = plat,
      err => console.log(err)
    );
  }

  unselect() {
    this.plat = null;
    this.plServ.sendToPlatSub(null);
  }

}

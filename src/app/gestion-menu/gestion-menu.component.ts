import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.component.html',
  styleUrls: ['./gestion-menu.component.css']
})
export class GestionMenuComponent implements OnInit {

  activeId:number=1;

  constructor() { }

  ngOnInit(): void {
  }

}

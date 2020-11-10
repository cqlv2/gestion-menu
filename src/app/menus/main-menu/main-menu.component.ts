import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public titleApp = "liste de courses";
  public logoUrl = "https://cdn.iconscout.com/icon/free/png-512/bento-box-food-plate-fastfood-symbol-emoj-30704.png";
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

} 

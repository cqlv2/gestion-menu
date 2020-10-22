import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { RouterModule} from '@angular/router'
import { ROUTES } from './routeur/app-routes';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
import { GestionPlatComponent } from './gestion-plat/gestion-plat.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GestionMenuComponent,
    GestionPlatComponent,
    GestionProduitComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

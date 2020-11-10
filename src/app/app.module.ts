import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { RouterModule} from '@angular/router'
import { ROUTES } from './routeur/app-routes';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
import { GestionPlatComponent } from './gestion-plat/gestion-plat.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { FooterComponent } from './footer/footer.component';
import { UnitePipe } from './pipes/unite.pipe';
import { Enum2strPipe } from './pipes/enum2str.pipe';
import { FormProduitComponent } from './gestion-produit/form-produit/form-produit.component';
import { InfoProduitComponent } from './gestion-produit/info-produit/info-produit.component';
import { MenuProduitComponent } from './menus/menu-produit/menu-produit.component';
import { TableauComponent } from './gestion-produit/tableau/tableau.component';
import { TableauPlatsComponent } from './gestion-plat/tableau-plats/tableau-plats.component';
import { InfoPlatComponent } from './gestion-plat/info-plat/info-plat.component';
import { FormPlatComponent } from './gestion-plat/form-plat/form-plat.component';
import { RatePipe } from './pipes/rate.pipe';
import { ShortStrPipe }from './pipes/short-str.pipe';
import { CalendrierComponent } from './gestion-menu/calendrier/calendrier.component';
import { ListeCoursesComponent } from './gestion-menu/liste-courses/liste-courses.component';
import { InfoCalendarComponent } from './gestion-menu/info-calendar/info-calendar.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormMenuComponent } from './gestion-menu/form-menu/form-menu.component';
import { CalendarHebdoComponent } from './gestion-menu/calendar-hebdo/calendar-hebdo.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GestionMenuComponent,
    GestionPlatComponent,
    GestionProduitComponent,
    FooterComponent,
    UnitePipe,
    Enum2strPipe,
    FormProduitComponent,
    InfoProduitComponent,
    MenuProduitComponent,
    TableauComponent,
    TableauPlatsComponent,
    InfoPlatComponent,
    FormPlatComponent,
    RatePipe,
    ShortStrPipe,
    CalendrierComponent,
    ListeCoursesComponent,
    InfoCalendarComponent,
    FormMenuComponent,
    CalendarHebdoComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

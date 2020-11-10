import { Routes } from '@Angular/router';
import { GestionMenuComponent } from '../gestion-menu/gestion-menu.component';
import { GestionPlatComponent } from '../gestion-plat/gestion-plat.component';
import { GestionProduitComponent } from '../gestion-produit/gestion-produit.component';
import { InfoProduitComponent } from '../gestion-produit/info-produit/info-produit.component';
import { FormProduitComponent } from '../gestion-produit/form-produit/form-produit.component';
import { InfoPlatComponent } from '../gestion-plat/info-plat/info-plat.component';
import { FormPlatComponent } from '../gestion-plat/form-plat/form-plat.component';
import { InfoCalendarComponent } from '../gestion-menu/info-calendar/info-calendar.component';
import { FormMenuComponent } from '../gestion-menu/form-menu/form-menu.component';



export const ROUTES: Routes = [
    // routage par defaut
    { path: '', pathMatch: 'full', redirectTo: 'menu' },
    //routage de la gestion des calendrier/menu
    { 
        path: 'menu', component: GestionMenuComponent, 
        children:[
            { path: '', pathMatch: 'full', redirectTo: 'info' },
            { path: 'info', component: InfoCalendarComponent },
            { path: 'form', component: FormMenuComponent },
            { path: 'form/:id', component: FormMenuComponent }
        ]
    },
    //routage getion des plats
    {
        path: 'plat', component: GestionPlatComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'info' },
            { path: 'info', component: InfoPlatComponent },
            { path: 'form', component: FormPlatComponent },
            { path: 'form/:id', component: FormPlatComponent }
        ]
    },
    // routage gestion des produits
    {
        path: 'produit', component: GestionProduitComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'info' },
            { path: 'info', component: InfoProduitComponent },
            { path: 'form', component: FormProduitComponent },
            { path: 'form/:id', component: FormProduitComponent }
        ]
    }















];
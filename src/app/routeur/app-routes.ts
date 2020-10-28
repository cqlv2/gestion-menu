import { Routes } from '@Angular/router';
import { GestionMenuComponent } from '../gestion-menu/gestion-menu.component';
import { GestionPlatComponent } from '../gestion-plat/gestion-plat.component';
import { GestionProduitComponent } from '../gestion-produit/gestion-produit.component';
import { InfoProduitComponent } from '../info-produit/info-produit.component';
import { FormProduitComponent } from '../form-produit/form-produit.component';



export const ROUTES: Routes = [
    { path: 'menu', component: GestionMenuComponent },
    { path: 'plat', component: GestionPlatComponent },
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
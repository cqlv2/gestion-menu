import {Routes}from '@Angular/router';
import {GestionMenuComponent}from '../gestion-menu/gestion-menu.component';
import {GestionPlatComponent}from '../gestion-plat/gestion-plat.component';
import {GestionProduitComponent}from '../gestion-produit/gestion-produit.component';

export const ROUTES:Routes=[
    {path:'menu', component:GestionMenuComponent},
    {path:'plat', component: GestionPlatComponent},
    {path:'produit', component: GestionProduitComponent},
    {path:'',pathMatch:'full',redirectTo:'/menu'}
];
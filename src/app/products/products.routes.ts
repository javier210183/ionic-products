import { Routes } from "@angular/router";

export const productsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
];
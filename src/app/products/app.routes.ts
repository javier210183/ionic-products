import { Routes } from '@angular/router';
import { logoutActivateGuard } from 'src/app/guards/logout-activate.guard';
import { loginActivateGuard } from 'src/app/guards/login-activate.guard';

export const routes: Routes = [
  {              
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.authRoutes),
    canActivate: [logoutActivateGuard]
  },
  {
    path: 'products',
    loadChildren: () =>
      import('src/app/products/products.routes').then((m) => m.productsRoutes),
    canActivate: [loginActivateGuard]
  },
];
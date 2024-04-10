import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, provideRouter, withPreloading } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/products/app.routes';
import { AppComponent } from './app/products/app.component';
import { environment } from './environments/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authTokenInterceptor } from './app/interceptors/auth-token.interceptor';
import { baseUrlInterceptor } from './app/interceptors/base-url.interceptor';

if (environment.production) {
  enableProdMode();
}





bootstrapApplication(AppComponent, {
  providers: [

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([baseUrlInterceptor, authTokenInterceptor])),
  ],
})

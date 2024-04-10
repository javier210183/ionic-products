import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Platform, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonAvatar, IonImg, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, logIn, documentText, checkmarkCircle, images, camera, arrowUndoCircle } from 'ionicons/icons';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, IonRouterLink, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonAvatar, IonImg ],
})
export class AppComponent {
  user: User | null = null;

  #authService = inject(AuthService);
  #platform = inject(Platform);

  public appPages = [{ title: 'Home', url: '/products', icon: 'home' }];
  constructor() {
    addIcons({ home, logIn, documentText, checkmarkCircle, images, camera, arrowUndoCircle });

    effect(() => {
      if (this.#authService.logged()) {
        this.#authService.getProfile().subscribe((user) => (this.user = user));
      } else {
        this.user = null;
      }
    });

    this.initializeApp();
  }

  async initializeApp() {
    if (this.#platform.is('capacitor')) {
      await this.#platform.ready();
      SplashScreen.hide();
      StatusBar.setBackgroundColor({ color: '#3880ff' });
      StatusBar.setStyle({ style: Style.Dark });
    }
  }
}
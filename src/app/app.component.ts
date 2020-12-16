import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Love2DanceTest';

  constructor(
    private menu: MenuController,
    private platForm: Platform,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platForm.ready().then(() => {
      this.router.navigateByUrl('splash')
    })
  };

  openFirst() {
    this.menu.enable(true,'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true,'custom');
    this.menu.open('custom');
  }
}



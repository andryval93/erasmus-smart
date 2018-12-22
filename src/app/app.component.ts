import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news'
import { StepperPage } from '../pages/stepper/stepper'
import { QeaPage } from '../pages/qea/qea';
import { UiChatPage } from '../pages/chat/ui-chat';


import { ENV } from '../config/env';
import firebase from 'firebase';

import { LoginPage } from '../pages/login/login';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { AngularFireModule } from 'angularfire2';
import { ReviewMainPage } from '../pages/review-main/review-main';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'News', component: NewsPage },
      { title: 'Stepper', component: StepperPage },
      { title: 'Q&A', component: QeaPage},
      { title: 'Login', component: LoginPage},
      { title: 'Registrazione', component: RegistrazionePage},
      { title: 'Chat', component: UiChatPage },
      { title: 'Recensioni', component: ReviewMainPage},
      
    ];

    firebase.initializeApp(ENV.firebase);
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

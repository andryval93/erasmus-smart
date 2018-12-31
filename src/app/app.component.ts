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
import { NewNewsPage } from '../pages/new-news/new-news';

import { ENV } from '../config/env';
import firebase from 'firebase';

import { LoginPage } from '../pages/login/login';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { AngularFireModule } from 'angularfire2';
import { ReviewMainPage } from '../pages/review-main/review-main';
import { LoginService } from '../providers/service/loginService';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  
  //root page
  rootPage: any;
  //check login into a variable
  logged: boolean;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loginService: LoginService) {
   
    this.initializeApp();
    this.logged = false;

    //fix error - Firebase App named '[DEFAULT]' already exists (app/duplicate-app)
    // firebase.initializeApp(ENV.firebase);
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      
      //set logged variable
      this.loginService.afAuth.authState
      .subscribe(
        user => {

          console.log("authenticated",user);

          //user logged
          if (user != null) {this.logged = true;} 
          
          //user unlogged
          else {this.logged = false;}
        },
      );

      //set navigation side bar & root page (logged/unlogged)
      if (this.logged) {

        this.rootPage = HomePage;

        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'News', component: NewsPage },
          { title: 'Q&A', component: QeaPage},
          { title: 'Recensioni', component: ReviewMainPage},
          { title: 'Stepper', component: StepperPage },
          { title: 'Chat', component: UiChatPage },
          { title: 'NewsTEMP', component: NewNewsPage},
        ];
      }

      else {

        this.rootPage = LoginPage;
            
        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'Login', component: LoginPage},
          { title: 'News', component: NewsPage },
          { title: 'Q&A', component: QeaPage},
          { title: 'Recensioni', component: ReviewMainPage},
          { title: 'NewsTEMP', component: NewNewsPage},
        ];
      }

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

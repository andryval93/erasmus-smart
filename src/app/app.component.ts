import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news'
import { StepperPage } from '../pages/stepper/stepper'
import { QeaPage } from '../pages/qea/qea';
import UiChatPage from '../pages/chat/ui-chat';
import { NewNewsPage } from '../pages/new-news/new-news';

import { ENV } from '../config/env';
import firebase from 'firebase';

import { LoginPage } from '../pages/login/login';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { AngularFireModule } from 'angularfire2';
import { ReviewMainPage } from '../pages/review-main/review-main';
import { LoginService } from '../providers/service/loginService';
import {AccountService} from '../providers/service/accountService';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  
  //root page
  rootPage: any;
  //check login into a variable
  logged: boolean;
  //email of logged user
  loggedEmail: String;
  //type of logged user
  userType: String;
  //list of pages
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loginService: LoginService, public accountService: AccountService) {

    //disconessione di eventuali log precedenti prima di avviare l'app
    //fix non più necessario
    //firebase.auth().signOut();
    //localStorage.clear();

    this.initializeApp();

    //fix error - Firebase App named '[DEFAULT]' already exists (app/duplicate-app)
    // firebase.initializeApp(ENV.firebase);
  }

  initializeApp() {
    
    this.statusBar.styleDefault();
    this.splashScreen.hide();

    this.loginLogic();
  }

  loginLogic() {

      //set logged variable
      this.loginService.afAuth.authState
      .subscribe(
        user => {
              
          console.log("authenticated",user);
    
          //user logged
          if (user != null) {
            
              this.logged = true;
              this.userIsLogged(user);
            }  
            
          //user unlogged
          else {

            this.logged = false;
            this.userIsNotLogged();
          }
        },
      );
  }

  userIsLogged(user) {

    this.rootPage = NewsPage;
    this.loggedEmail = firebase.auth().currentUser.email;

    //check the type of logged user
    this.accountService.getTypeAccount("Account", user.email)
    .then(
      type => {

        //tutor
        if (type == "tutor") {

          this.userType = "Tutor Account";

          this.pages = [
            { title: 'News', component: NewsPage },
            { title: 'Q&A', component: QeaPage},
            { title: 'Recensioni', component: ReviewMainPage},
            { title: 'Chat', component: UiChatPage },
          ];
        }

        //student
        else {

          this.userType = "Student Account"

          this.pages = [
            { title: 'News', component: NewsPage },
            { title: 'Q&A', component: QeaPage},
            { title: 'Recensioni', component: ReviewMainPage},
            { title: 'Stepper', component: StepperPage },
            { title: 'Chat', component: UiChatPage },
          ];
        }
      },
    );
  }

  userIsNotLogged() {

    this.rootPage = LoginPage;
    this.loggedEmail = "Guest@erasmussmart.org";
    this.userType = "Guest Account";
        
    this.pages = [
      { title: 'Login', component: LoginPage},
      { title: 'News', component: NewsPage },
      { title: 'Q&A', component: QeaPage},
      { title: 'Recensioni', component: ReviewMainPage},
    ];
  }

  logout() {

    firebase.auth().signOut();
    localStorage.clear();

    this.rootPage = LoginPage;
    this.logged = false;
    this.loggedEmail = "Guest@erasmussmart.org";
    this.userType = "Guest Account";
    
    this.nav.popToRoot;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

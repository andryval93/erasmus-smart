import { reviewService } from './../providers/service/reviewsService';
import { ReviewMainPage } from './../pages/review-main/review-main';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { QeaPage } from '../pages/qea/qea';
import { NuovadomandaPage } from '../pages/nuovadomanda/nuovadomanda';
import UiChatPage from '../pages/chat/ui-chat';
import { NewNewsPage } from '../pages/new-news/new-news';

import { HeaderEsComponent } from '../components/header-es/header-es';
import { FooterEsComponent } from '../components/footer-es/footer-es'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenchatPage } from '../pages/openchat/openchat';
import { IonicStepperModule } from 'ionic-stepper';
import { StepperPage } from '../pages/stepper/stepper';
import { HttpClientModule } from '@angular/common/http';

import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFirestoreModule } from "angularfire2/firestore";

import { ServiceProvider } from '../providers/service/stepperService';
import { InserisciRecensionePage } from '../pages/inserisci-recensione/inserisci-recensione'
import { QeaServiceProvider } from '../providers/service/qeaService';
import { RisposteQeaServiceProvider } from '../providers/service/risposteQeaService';
import { RispostePage } from '../pages/risposte/risposte';
import { from } from 'rxjs/observable/from';

import { LoginPage } from '../pages/login/login';
import { LoginService } from '../providers/service/loginService';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { ENV } from '../config/env';
import { ReviewsListPage } from '../pages/reviews-list/reviews-list';
import { RegistrationProvider } from '../providers/service/registrationService';
import { NuovaDomandaServiceProvider } from '../providers/service/nuovaDomandaService';
import { AccountService } from '../providers/service/accountService';
import { NewNewsProvider } from '../providers/service/newNewsService';
import { MessaggingService } from '../providers/service/messaggingService';

import { InserisciRecensioneService } from '../providers/service/inserisciRecensioneService'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    ListPage,
    UiChatPage,
    OpenchatPage,
    HeaderEsComponent,
    FooterEsComponent,
    StepperPage,
    InserisciRecensionePage,
    StepperPage,
    QeaPage,
    NuovadomandaPage,
    RispostePage,
    NewNewsPage,
    LoginPage,
    RegistrazionePage,
    ReviewsListPage,
    ReviewMainPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFirestoreModule,
    IonicStepperModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(ENV.firebase)
   

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    ListPage,
    StepperPage,
    InserisciRecensionePage,
    StepperPage,
    QeaPage,
    NuovadomandaPage,
    RispostePage,
    NewNewsPage,
    LoginPage,
    RegistrazionePage,
    UiChatPage,
    OpenchatPage,
    ReviewsListPage,
    ReviewMainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    /*EnvironmentsProvider,*/
    ServiceProvider,
    QeaServiceProvider,
    LoginService,
    AngularFireAuth,
    RegistrationProvider,
    RisposteQeaServiceProvider,
    reviewService,
    RisposteQeaServiceProvider,
    reviewService,
    RisposteQeaServiceProvider,
    RisposteQeaServiceProvider,
    NuovaDomandaServiceProvider,
    AccountService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewNewsProvider
  ]
})
export class AppModule {}

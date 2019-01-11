import { reviewService } from './../providers/service/reviewsService';
import { ReviewMainPage } from './../pages/review-main/review-main';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyAppComponent } from './app.component';
import { ListPageComponent } from '../pages/list/list';
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

import { RispostePage } from '../pages/risposte/risposte';
import { from } from 'rxjs/observable/from';

import { LoginPage } from '../pages/login/login';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { ENV } from '../config/env';
import { ReviewsListPage } from '../pages/reviews-list/reviews-list';

import { AccountService } from '../providers/service/accountService';
import { MessageProvider } from '../providers/service/messagingService'
import { NewsServiceProvider } from '../providers/service/newsService';
import { MessageComponent } from '../components/message/message';
import { InserisciRecensioneService } from '../providers/service/inserisciRecensioneService';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyAppComponent,
    NewsPage,
    ListPageComponent,
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
    ReviewMainPage,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFirestoreModule,
    IonicStepperModule,
    IonicModule.forRoot(MyAppComponent),
    Ionic2RatingModule,
    AngularFireModule.initializeApp(ENV.firebase)
   

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    NewsPage,
    ListPageComponent,
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
    ReviewMainPage,
    MessageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    /*EnvironmentsProvider,*/
    ServiceProvider,
    QeaServiceProvider,
    AngularFireAuth,
 
    reviewService,
   
    AccountService,
    NewsServiceProvider,
    MessageProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InserisciRecensioneService,
  ]
})
export class AppModule {}

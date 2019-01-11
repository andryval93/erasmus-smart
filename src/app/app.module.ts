import { reviewService } from './../providers/service/reviewsService';
import { ReviewMainPageComponent } from './../pages/review-main/review-main';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyAppComponent } from './app.component';
import { ListPageComponent } from '../pages/list/list';

import { NewsPageComponent } from '../pages/news/news';
import { QeaPageComponent } from '../pages/qea/qea';
import { NuovadomandaPageComponent } from '../pages/nuovadomanda/nuovadomanda';
import UiChatPageComponent from '../pages/chat/ui-chat';

import { NewNewsPageComponent } from '../pages/new-news/new-news';

import { HeaderEsComponent } from '../components/header-es/header-es';
import { FooterEsComponent } from '../components/footer-es/footer-es'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenchatPageComponent } from '../pages/openchat/openchat';
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

import { RispostePageComponent } from '../pages/risposte/risposte';
import { from } from 'rxjs/observable/from';

import { LoginPage } from '../pages/login/login';
import { RegistrationPageComponent } from '../pages/registration/registration';
import { ENV } from '../config/env';
import { ReviewsListPageComponent } from '../pages/reviews-list/reviews-list';

import { AccountService } from '../providers/service/accountService';
import { MessageProvider } from '../providers/service/messagingService'
import { NewsServiceProvider } from '../providers/service/newsService';
import { MessageComponent } from '../components/message/message';
import { InserisciRecensioneService } from '../providers/service/inserisciRecensioneService';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyAppComponent,
    NewsPageComponent,
    ListPageComponent,
    UiChatPageComponent,
    OpenchatPageComponent,
    HeaderEsComponent,
    FooterEsComponent,
    StepperPage,
    InserisciRecensionePage,
    StepperPage,
    QeaPageComponent,
    NuovadomandaPageComponent,
    RispostePageComponent,
    NewNewsPageComponent,
    LoginPage,
    RegistrationPageComponent,
    ReviewsListPageComponent,
    ReviewMainPageComponent,
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
    NewsPageComponent,
    ListPageComponent,
    StepperPage,
    InserisciRecensionePage,
    StepperPage,
    QeaPageComponent,
    NuovadomandaPageComponent,
    RispostePageComponent,
    NewNewsPageComponent,
    LoginPage,
    RegistrationPageComponent,
    UiChatPageComponent,
    OpenchatPageComponent,
    ReviewsListPageComponent,
    ReviewMainPageComponent,
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

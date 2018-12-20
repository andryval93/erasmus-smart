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


import { HeaderEsComponent } from '../components/header-es/header-es';
import { FooterEsComponent } from '../components/footer-es/footer-es'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStepperModule } from 'ionic-stepper';
import { StepperPage } from '../pages/stepper/stepper';
import { HttpClientModule } from '@angular/common/http';

import { Firebase } from '@ionic-native/firebase';
/*import { AngularFireModule } from 'angularfire2';*/
import { AngularFirestoreModule } from "angularfire2/firestore";
/*import { EnvironmentsProvider } from '../providers/environments/environments';*/
import { ServiceProvider } from '../providers/service/stepperService';
import { InserisciRecensionePage } from '../pages/inserisci-recensione/inserisci-recensione'
import { QeaServiceProvider } from '../providers/service/qeaService';
import { RispostePage } from '../pages/risposte/risposte';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    ListPage,
    HeaderEsComponent,
    FooterEsComponent,
    StepperPage,
    InserisciRecensionePage,
    StepperPage,
    QeaPage,
    NuovadomandaPage,
    RispostePage,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFirestoreModule,
    IonicStepperModule,
    IonicModule.forRoot(MyApp),

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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    /*EnvironmentsProvider,*/
    ServiceProvider,
    QeaServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

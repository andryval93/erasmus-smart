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
import { StepperPageComponent } from '../pages/stepper/stepper';
import { HttpClientModule } from '@angular/common/http';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule, AngularFireStorage } from "angularfire2/storage";
import { StepService } from '../providers/service/stepService';
import { InserisciRecensionePageComponent } from '../pages/inserisci-recensione/inserisci-recensione'
import { QeaServiceProvider } from '../providers/service/qeaService';
import { RispostePageComponent } from '../pages/risposte/risposte';
import { LoginPage } from '../pages/login/login';
import { RegistrationPageComponent } from '../pages/registration/registration';
import { ENV } from '../config/env';
import { ReviewsListPageComponent } from '../pages/reviews-list/reviews-list';
import { AccountService } from '../providers/service/accountService';
import { MessageProvider } from '../providers/service/messagingService'
import { NewsServiceProvider } from '../providers/service/newsService';
import { MessageComponent } from '../components/message/message';
import { FileComponent } from '../components/file/file';
import { Ionic2RatingModule } from 'ionic2-rating';
import { GuidaLAPageComponent } from '../pages/guida-LA/guida-LA';
import { ConsiglicolloquioPageComponent } from '../pages/consiglicolloquio/consiglicolloquio';
import { GuidaCandidaturaPageComponent } from '../pages/guidacandidatura/guidacandidatura';

@NgModule({
  declarations: [
    MyAppComponent,
    NewsPageComponent,
    ListPageComponent,
    UiChatPageComponent,
    OpenchatPageComponent,
    HeaderEsComponent,
    FooterEsComponent,
    QeaPageComponent,
    NuovadomandaPageComponent,
    RispostePageComponent,
    StepperPageComponent,
    InserisciRecensionePageComponent,
    NewNewsPageComponent,
    LoginPage,
    RegistrationPageComponent,
    ReviewsListPageComponent,
    ReviewMainPageComponent,
    MessageComponent,
    FileComponent,
    GuidaLAPageComponent,
    ConsiglicolloquioPageComponent,
    GuidaCandidaturaPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFirestoreModule,
    IonicStepperModule,
    IonicModule.forRoot(MyAppComponent),
    Ionic2RatingModule,
    AngularFireModule.initializeApp(ENV.firebase),
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    NewsPageComponent,
    ListPageComponent,
    QeaPageComponent,
    NuovadomandaPageComponent,
    RispostePageComponent,
    StepperPageComponent,
    InserisciRecensionePageComponent,
    NewNewsPageComponent,
    LoginPage,
    RegistrationPageComponent,
    UiChatPageComponent,
    OpenchatPageComponent,
    ReviewsListPageComponent,
    ReviewMainPageComponent,
    MessageComponent,
    FileComponent,
    GuidaLAPageComponent,
    ConsiglicolloquioPageComponent,
    GuidaCandidaturaPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    /*EnvironmentsProvider,*/
    StepService,
    QeaServiceProvider,
    AngularFireAuth,
    reviewService,
    AccountService,
    NewsServiceProvider,
    MessageProvider,
    AngularFireStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}

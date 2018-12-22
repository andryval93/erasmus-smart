import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { UiChatPage } from '../pages/chat/ui-chat';

import { HeaderEsComponent } from '../components/header-es/header-es';
import { FooterEsComponent } from '../components/footer-es/footer-es'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenchatPage } from '../pages/openchat/openchat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    ListPage,
    UiChatPage,
    OpenchatPage,
    HeaderEsComponent,
    FooterEsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    ListPage,
    UiChatPage,
    OpenchatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

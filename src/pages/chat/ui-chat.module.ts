import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import UiChatPage from './ui-chat';
import { OpenchatPage } from '../openchat/openchat';

@NgModule({
  declarations: [
    UiChatPage,
    OpenchatPage
  ],
  imports: [
    IonicPageModule.forChild(UiChatPage),
  ],
})
export class UiChatPageModule {}

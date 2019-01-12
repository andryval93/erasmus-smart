import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import UiChatPage from './ui-chat';
import { OpenchatPageComponent } from '../openchat/openchat';

@NgModule({
  declarations: [
    UiChatPage,
    OpenchatPageComponent
  ],
  imports: [
    IonicPageModule.forChild(UiChatPage),
  ],
})
export class UiChatPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenchatPage } from './openchat';

@NgModule({
  declarations: [
    OpenchatPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenchatPage),
  ],
})
export class OpenchatPageModule {}

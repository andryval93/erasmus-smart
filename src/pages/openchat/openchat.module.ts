import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenchatPageComponent } from './openchat';

@NgModule({
  declarations: [
    OpenchatPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(OpenchatPageComponent),
  ],
})
export class OpenchatPageModule {}

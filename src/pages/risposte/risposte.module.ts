import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RispostePage } from './risposte';

@NgModule({
  declarations: [
    RispostePage,
  ],
  imports: [
    IonicPageModule.forChild(RispostePage),
  ],
})
export class RispostePageModule {}

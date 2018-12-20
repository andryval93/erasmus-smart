import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuovadomandaPage } from './nuovadomanda';

@NgModule({
  declarations: [
    NuovadomandaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuovadomandaPage),
  ],
})
export class NuovadomandaPageModule {}

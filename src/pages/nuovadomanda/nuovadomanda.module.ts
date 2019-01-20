import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuovadomandaPageComponent } from './nuovadomanda';

@NgModule({
  declarations: [
    NuovadomandaPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(NuovadomandaPageComponent),
  ],
})
export class NuovadomandaPageModule {}

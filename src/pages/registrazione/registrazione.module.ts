import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrazionePage } from '../registrazione/registrazione';

@NgModule({
  declarations: [
    RegistrazionePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrazionePage),
  ],
})
export class RegistrazionePageModule {}

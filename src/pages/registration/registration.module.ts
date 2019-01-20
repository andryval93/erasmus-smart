import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationPageComponent } from './registration';

@NgModule({
  declarations: [
    RegistrationPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationPageComponent),
  ],
})
export class RegistrationPageModule {}

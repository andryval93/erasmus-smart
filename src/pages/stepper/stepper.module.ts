import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepperPage } from './stepper';

@NgModule({
  declarations: [
    StepperPage,
  ],
  imports: [
    IonicPageModule.forChild(StepperPage),
  ],
})
export class StepperPageModule {}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepperPageComponent } from './stepper';

@NgModule({
  declarations: [
    StepperPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(StepperPageComponent),
  ],
})
export class StepperPageModule {}
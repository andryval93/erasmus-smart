import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewNewsPageComponent } from './new-news';

@NgModule({
  declarations: [
    NewNewsPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(NewNewsPageComponent),
  ],
})
export class NewNewsPageModule {}

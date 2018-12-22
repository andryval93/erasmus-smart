import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewNewsPage } from './new-news';

@NgModule({
  declarations: [
    NewNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewNewsPage),
  ],
})
export class NewNewsPageModule {}

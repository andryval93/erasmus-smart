import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPageComponent } from './news';

@NgModule({
  declarations: [
    NewsPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(NewsPageComponent),
  ],
})
export class NewsPageModule {}

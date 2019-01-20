import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewMainPageComponent } from './review-main';

@NgModule({
  declarations: [
    ReviewMainPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(ReviewMainPageComponent),
  ],
})
export class ReviewMainPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewMainPage } from './review-main';

@NgModule({
  declarations: [
    ReviewMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewMainPage),
  ],
})
export class ReviewMainPageModule {}

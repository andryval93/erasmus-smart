import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewsListPage } from './reviews-list';

@NgModule({
  declarations: [
    ReviewsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewsListPage),
  ],
})
export class ReviewsListPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewsListPageComponent } from './reviews-list';

@NgModule({
  declarations: [
    ReviewsListPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(ReviewsListPageComponent),
  ],
})
export class ReviewsListPageModule {}

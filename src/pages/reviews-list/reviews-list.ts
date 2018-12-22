import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReviewsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviews-list',
  templateUrl: 'reviews-list.html',
})

export class ReviewsListPage {
  Stars: any;
  University: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const uni=navParams.get("University");
    //const uni=localStorage.getItem("University");
    this.University=uni;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsListPage');
  }

  selectReviews(){
    console.log(this.Stars);
  }
}

import { ReviewsListPage } from '../reviews-list/reviews-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ReviewMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-main',
  templateUrl: 'review-main.html',
})
export class ReviewMainPage {
  Sede: any;
  Comparison: String;
  Unis: String[];
  Universities: Array<{id: String, name: String}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Comparison="Seleziona sede";
    this.Unis=["Seleziona sede","UNISA","UNINA","UNIBO","UNICA","UNIMI","UNI","DUI","TREI"];
    this.Universities=[];
    for(let i=0; i<this.Unis.length;i++)
    {
      this.Universities.push(
        {
          id: this.Unis[i],
          name: this.Unis[i]
        }
      )
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiRegPage');
  }
  goToReviews()
  {
    if(this.Sede!=null&&this.Sede!=this.Comparison)
    {
    console.log(this.Sede);
    //localStorage.setItem("University", this.Sede);
    this.navCtrl.push(ReviewsListPage, {University: this.Sede});
    }
  }
}

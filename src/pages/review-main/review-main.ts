import { ReviewsListPage } from '../reviews-list/reviews-list';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { reviewService } from '../../providers/service/reviewsService'
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
  private Document: string ="Universities";
  private uniDocument: string ="university";
  private idDocument: string="id";
  Sede: any;
  Comparison: String;
  //Unis: any;
  Universities: Array<{ id: String, name: String}>;

  constructor(public navCtrl: NavController, private DBIstance: reviewService) {
    this.Comparison = "Seleziona sede";
    this.Universities = [];
    this.fillUniversities();
  }

  fillUniversities() {
    console.log("activated", "yessssssssss");
    this.DBIstance.getUniversities(this.Document)
      .then((data) => {
        // IF we don't have any documents then the collection doesn't exist
        // so we create it!
        if (data.length === 0) {
          console.log("Error", "Errorrrrrrrrrrrr!!!!!!!")
        }
        // Otherwise the collection does exist and we assign the returned
        // documents to the public property of locations so this can be
        // iterated through in the component template
        else {
          //this.Unis = data;
          for (let i = 0; i < data.length; i++) {
            //console.log("University", this.Unis[i]["Reviews"]);
            this.Universities.push(
              {
                id: data[i][this.idDocument],
                name: data[i][this.uniDocument]
              }
            )
          }
        }
      })
      .catch();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UiRegPage');
  }
  goToReviews() {
    if (this.Sede != null && this.Sede != this.Comparison) {
      console.log(this.Sede);
      localStorage.setItem("University", this.Sede);
      this.navCtrl.push(ReviewsListPage, { University: this.Sede,
      });
    }
  }

  saveID()
  {
    console.log("IDDDDDD","11111111111");
  }
}
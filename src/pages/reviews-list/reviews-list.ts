import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reviewService } from '../../providers/service/reviewsService'

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
  private Document :string="Universities"
  Stars: any;
  University: any;
  private uni: String;

  Reviews: Array<{recensore: String, date: String, stars: any, text: String}>

  constructor(public navCtrl: NavController, public navParams: NavParams, private DBIstance: reviewService) {
    this.uni=navParams.get("University");
    //const uni=localStorage.getItem("University");
    this.Reviews=[];
    this.fillUniversityReviews();
  }

  fillUniversityReviews() {
    console.log("activated", "yessssssssss");
    this.DBIstance.getUniversities(this.Document)
      .then((data) => {
        if (data.length === 0) {
          console.log("Error", "Errorrrrrrrrrrrr!!!!!!!")
        }
        else {
          for(let i=0; i<data.length;i++)
          {
            if(this.uni===data[i]["id"])
            {
              this.University=data[i]["university"]
            }
          }
          for (let i = 0; i < data.length; i++) {
            console.log("University", data[i]["reviews"]["Review"]);
            if(this.University===data[i]["university"]){
            this.Reviews.push(
              {
                recensore: data[i]["reviews"]["Review"]["recensore"],
                date: data[i]["reviews"]["Review"]["date"],
                stars: data[i]["reviews"]["Review"]["stars"],
                text: data[i]["reviews"]["Review"]["text"],
              })
            }
          }
        }
      })
      .catch();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsListPage');
  }

  selectReviews(){
    console.log(this.Stars);
  }
}
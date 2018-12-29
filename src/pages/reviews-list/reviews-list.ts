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
  private Document :string="Reviews"
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
    this.DBIstance.getReviews(this.Document)
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
            console.log("University", data[i]);
            if(this.University===data[i]["university"]){
            this.Reviews.push(
              {
                recensore: data[i]["Reviews"]["Review"]["recensore"],
                date: data[i]["Reviews"]["Review"]["date"],
                stars: data[i]["Reviews"]["Review"]["stars"],
                text: data[i]["Reviews"]["Review"]["text"],
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
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
  Stars: any=0;
  University: any;
  private uni: String;

  allReviews: Array<{recensore: String, date: String, starsA: any, text: String,starsI: any }>
  Reviews: Array<{recensore: String, date: String, starsA: any, text: String,starsI: any }>

  constructor(public navCtrl: NavController, public navParams: NavParams, private DBIstance: reviewService) {
    this.uni=navParams.get("University");
    //const uni=localStorage.getItem("University");
    this.allReviews=[];
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
            //console.log("University", data[i]["Reviews"]["Review"]["stars"].length);
            if(this.University===data[i]["university"]){
            this.allReviews.push(
              {
                recensore: data[i]["Reviews"]["Review"]["recensore"],
                date: data[i]["Reviews"]["Review"]["date"],
                starsA: data[i]["Reviews"]["Review"]["stars"],
                text: data[i]["Reviews"]["Review"]["text"],
                starsI: data[i]["Reviews"]["Review"]["stars"].length
              })
            }
          }
          this.selectReviews();
        }
      })
      .catch();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsListPage');
  }

  selectReviews(){
    this.Reviews=[];
    for (let i = 0; i < this.allReviews.length; i++) {
      if(this.allReviews[i]["starsI"]>=this.Stars){
        //console.log("aaaUniversity", this.allReviews[i]["starsI"]);
      this.Reviews.push(
        {
          recensore: this.allReviews[i]["recensore"],
          date: this.allReviews[i]["date"],
          starsA: this.allReviews[i]["starsA"],
          text: this.allReviews[i]["text"],
          starsI: this.allReviews[i]["starsI"]
        })
        //console.log("aaaUni", this.allReviews[i]["university"])
      }
    }
  }
}
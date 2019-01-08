import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reviewService } from '../../providers/service/reviewsService';
import { LoadingController } from 'ionic-angular';

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
  private Document: string = "Reviews"
  Stars: any = 0;
  University: any;
  private uni: String;
  loaded: boolean = false;
  selected: boolean = false;
  noStars: any;
  allReviews: Array<{ recensore: String, date: String, starsA: any, text: String, starsI: any, title: String, voidStars:any}>;
  Reviews: Array<{ recensore: String, date: String, starsA: any, text: String, starsI: any, img: String, title: String, voidStars:any}>;
  StarsSelector: Array<{ key: String, value: String }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private DBIstance: reviewService, public loadingCtrl: LoadingController) {
    this.uni = navParams.get("University");
    this.StarsSelector = [];
    this.allReviews = [];
    this.Reviews = [];
    this.fillStars();
    this.presentLoading();
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
          let j = 0;
          let k = 0;
          for (let i = 0; i < data.length; i++) {
            if (this.uni === data[i]["id"]) {
              this.University = data[i]["university"]
              k = i;
              break;
            }
          }
          //for (let i = 0; i <data.length; i++) {
          do {
            if (data[k]["Reviews"][j] == null)
              break;
            if (this.University === data[k]["university"]) {
              //console.log("uni",data[k])
              this.allReviews.push(
                {
                  recensore: data[k]["Reviews"][j]["recensore"],
                  date: data[k]["Reviews"][j]["date"],
                  starsA: data[k]["Reviews"][j]["stars"],
                  text: data[k]["Reviews"][j]["text"],
                  starsI: data[k]["Reviews"][j]["stars"].length,
                  title: data[k]["Reviews"][j]["titolo"],
                  voidStars: this.noStars=new Array(5-(data[k]["Reviews"][j]["stars"].length))
                })
              j++;
              //console.log("aaa ",)
            }
          } while (data[k]["Reviews"][j] != null)
          this.selectReviews();
        }
      })
      .catch();
  }

  ionViewDidLoad() {
    //console.log('notloaded', this.loaded);
  }

  selectReviews() {
    this.presentLoading();
    this.Reviews = [];
    this.quickSort(this.allReviews,0,this.allReviews.length-1)
    if(this.Stars==0)
      this.selected=false;
    for (let i = 0; i < this.allReviews.length; i++) {
      if (this.allReviews[i]["starsI"] >= this.Stars && this.selected == false) {
        console.log("aaaUniversity", this.allReviews[i]);
        this.Reviews.push(
          {
            recensore: this.allReviews[i]["recensore"],
            date: this.allReviews[i]["date"],
            starsA: this.allReviews[i]["starsA"],
            text: this.allReviews[i]["text"],
            starsI: this.allReviews[i]["starsI"],
            img: "../../assets/imgs/balsamiq.png",
            title: this.allReviews[i]["title"],
            voidStars: this.allReviews[i]["voidStars"]
          })
      }
      if (this.allReviews[i]["starsI"] == this.Stars && this.selected == true) {
        //console.log("aaaUniversity", this.allReviews[i]["starsI"]);
        this.Reviews.push(
          {
            recensore: this.allReviews[i]["recensore"],
            date: this.allReviews[i]["date"],
            starsA: this.allReviews[i]["starsA"],
            text: this.allReviews[i]["text"],
            starsI: this.allReviews[i]["starsI"],
            img: "../../assets/imgs/balsamiq.png",
            title: this.allReviews[i]["title"],
            voidStars: this.allReviews[i]["voidStars"]
          })
      }
    }
    if (this.Reviews.length == 0) {
      this.Reviews.push(
        {
          recensore: "Nessuna recensione",
          date: "",
          starsA: "",
          text: "",
          starsI: "",
          img: "../../assets/imgs/error.png",
          title: "",
          voidStars:""
        }
      )
    }
    this.selected = true;
    //console.log("selected", this.selected)
  }

  presentLoading() {
    this.loadingCtrl.create({
      spinner: "ios",
      content: 'Please wait...',
      duration: 1,
      dismissOnPageChange: true,
      cssClass: "my-loading"
    }).present();
  }

  fillStars() {
    this.StarsSelector.push(
      {
        key: "1 Stella",
        value: "1"
      }
    )
    for (let i = 2; i < 6; i++) {
      this.StarsSelector.push(
        {
          key: String(i) + " Stelle",
          value: String(i)
        })
    }
  }

  quickSort(arr: any, p: number, q: number) {
    let index = this.partition(arr, p, q);
    if (p < index - 1) {
      this.quickSort(arr, p, index - 1)
    }
    if (index < q) {
      this.quickSort(arr, index, q)
    }
  }
  partition(arr: any, p: number, q: number):number {
    let tmp: any;
    let i: number;
    let j: number;
    let pivot: number;
    i = p;
    j = q;
    pivot = arr[Math.floor((i + j) / 2)]["starsI"];
    
    while (i <= j) {
      while (arr[i]["starsI"] < pivot)
        i++;
      while (arr[j]["starsI"] > pivot)
        j--;
      if (i <= j) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
      }
    }
    return i;
  }
}
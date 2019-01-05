import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/service/newsService';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  title :string = "News";
  private Document :string = "News";
  newsList: Array<{title: String, date: String, content: String}> = [];
  moment = require('moment');

  constructor(public navCtrl: NavController, public navParams: NavParams, private DBIstance: NewsServiceProvider, public loadingCtrl: LoadingController) {
    this.retrieveNews();
  }

  retrieveNews() {
    this.presentLoading();
    console.log("Fetching news from the database, please wait!");
    this.DBIstance.getNews(this.Document)
      .then((data) => {
        if (data.length === 0) {
          console.log("No news found!");
          this.newsList.push({
            title: "No news found",
            date: new Date().toString(),
            content: "No news fetched from the database!"
          });
        }
        else {
          console.log("News fetched from the database!");
          for (let i = 0; i < data.length; i++) {
            this.newsList.push({
              title: data[i]["title"],
              date: this.moment(data[i]["date"]).format("DD-MM-YYYY HH:mm"),
              content: data[i]["content"]
            });
          }
        }
      })
      .catch();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content:"Attendi un attimo..",
      duration: 3000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
}

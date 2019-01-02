import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private DBIstance: NewsServiceProvider) {
    this.retrieveNews();
  }

  retrieveNews() {
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
              date: data[i]["date"],
              content: data[i]["content"]
            });
          }
        }
      })
      .catch();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
}

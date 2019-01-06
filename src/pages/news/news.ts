import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/service/newsService';
import { NewNewsPage } from '../new-news/new-news';
import { LoginService } from '../../providers/service/loginService';
import { AccountService } from '../../providers/service/accountService';

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
  /*title :string = "News";
  private Document :string = "News";
  newsList: Array<{title: String, date: String, content: String}> = [];
  moment = require('moment');
  shouldHide: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private DBIstance: NewsServiceProvider, public loadingCtrl: LoadingController) {
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: LoginService, public DBIstance: NewsServiceProvider, public DBAccount: AccountService) {
    this.retrieveNews();
    //this.checkAdmin();
  }

  /*
  * Aggiunta di una news da parte dell'admin
  */
  newNews() {
    this.navCtrl.push(NewNewsPage);
  }
  /*
  * Controllo se admin è loggato
  */
  /*checkAdmin(){
    let email = "guest";
    let userType = "guest";
    let d: any;
    this.auth.afAuth.authState
      .subscribe(
        user => {
          console.log(user.email);
          email = user.email;
        }
      );

    this.DBAccount.getAccount('Account', email).then((data)=>{
      d = data.data().userType;
    });

    userType = d;

    if(userType==="admin")
      this.shouldHide = false;
    console.log(this.shouldHide);
  }*/

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
  }*/
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/service/newsService';
import { NewNewsPageComponent } from '../new-news/new-news';
import { AccountService } from '../../providers/service/accountService';
declare var require: any;

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

export class NewsPageComponent {
  title :string = "News";
  private Document :string = "News";
  newsList: Array<{title: string, date: string, content: string}> = [];
  listTemp: Array<{title: string, date: string, content: string}> = [];
  moment = require('moment');
  shouldHide: boolean = true;
  loader :any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AccountService, public DBIstance: NewsServiceProvider, public DBAccount: AccountService, public loadingCtrl: LoadingController) { 
    this.checkAdmin();
    this.retrieveNews();
  }

  /**
  * @description Sposta l'amministratore sulla pagina per il caricamento news
  * @author Giovanni Buonincontri
  */
  newNews() {
    this.navCtrl.push(NewNewsPageComponent);
  }
  /**
  * @description Controlla se l'admin è loggato
  * @author Giovanni Buonincontri
  */
  checkAdmin(){
    let email = "guest";
    let userType = "guest";
    
    this.auth.afAuth.authState
      .subscribe(
        user => {
          email = user.email;
          this.DBAccount.getAccount("Account", email).then((data)=>{
            userType = data.data().userType;
            if(userType=="admin"){
              this.shouldHide = false;      
            }
            else{
              this.shouldHide = true;
            }
          }).catch();
        }
      );
  }
  /**
   * @description Recupera le news da mostrare nella pagina web dal database.
   * @author Giosuè Sulipano
   */
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
            this.listTemp.push({
              title: data[i]["title"],
              date: data[i]["date"],
              content: data[i]["content"]
            });
          }
          this.listTemp.sort(function(a,b){
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c.getTime()-d.getTime();
          });
          for(let i = this.listTemp.length-1; i > -1; i--) {
            this.newsList.push({
              title: this.listTemp[i]["title"],
              date: this.moment(this.listTemp[i]["date"]).format("DD-MM-YYYY HH:mm"),
              content: this.listTemp[i]["content"]
            });
          }
        }
      })
      .catch();
      if (this.loader != null) {
        this.loader.dismiss();
      }
  }
  /**
   * @description Crea un LoadingController da mostrare durante il caricamento dei contenuti.
   * @author Giosuè Sulipano
   */
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content:"Attendi un attimo..",
      //duration: 3000,
      //dismissOnPageChange: true
    });
    this.loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
}

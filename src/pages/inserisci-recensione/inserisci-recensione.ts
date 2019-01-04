import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InserisciRecensioneService } from '../../providers/service/inserisciRecensioneService';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../providers/service/loginService';
import { NewsPage } from '../news/news';

/**
 * Generated class for the InserisciRecensionePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserisci-recensione',
  templateUrl: 'inserisci-recensione.html',
})
export class InserisciRecensionePage {
  /**
   * @name _COLL
   * @type {string}
   * @private
   * @description      Defines the name of the database collection
   */
  private _COLL: string = "Reviews";

  /**
 * @name locations
 * @type {any}
 * @public
 * @description      Property to store the returned documents from the database collection
 */
  public locations: any;

  /**
 * @name form
 * @type {object}
 * @public
 * @description     Defines an object for handling form validation
 */
  public form: any;
     /**
      * @name _CONTENT
      * @type {any}
      * @private
      * @description      Used to store/provide the initial document data for the database collection
      */

     private _CONTENT: any;

  locationsAccounts: any;
  
  arrayReviews: any;
  temp: { titolo: any; text: any; recensore: string; date: string; stars: String[]; };
  idReview: any;
  alertNuovaRecensione: boolean;
  



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private DBistance: InserisciRecensioneService,
    private _FB: FormBuilder,
    private loginService: LoginService,
    private alertCtrl : AlertController) {
    this.form = _FB.group({
      'Titolo': ['', Validators.required],
      'Descrizione': ['', Validators.required]
    });
    this.alertNuovaRecensione = false ;
  }

  ionViewDidLoad() {
    this.retrieveCollection();
    console.log('ionViewDidLoad InserisciRecensionePage');
  }
  retrieveCollection(): void {
    this.DBistance.getDocuments(this._COLL)
      .then((data) => {
        this.locations = data;
      })
      .catch();

    this.DBistance.getDocuments("Account")
      .then((data) => {
        this.locationsAccounts = data;
      })
      .catch();

  }
  saveDocument(): void {
    var email = new String(this.loginService.user.email);
    for (let i = 0; 1 < this.locationsAccounts.length; i++) {
      var str1 = new String(this.locationsAccounts[i].id);
      if (str1.localeCompare(email.substring(0)) == 0) {
        var sedeAccountLoggato = this.locationsAccounts[i].sede;
        break;
      }
    }
    for (let i = 0; 1 < this.locations.length; i++) {
      var str1 = new String(this.locations[i].sede);
      if (str1.localeCompare(sedeAccountLoggato.substring(0)) == 0) {
        this.arrayReviews = this.locations[i].ReviewsList;
        this.idReview = this.locations[i].id;
        break;
      }
    }

    this.temp = {
      titolo: this.form.controls["Titolo"].value,
      text: this.form.controls["Descrizione"].value,  
      recensore : email.substring(0),
      date : new Date().toISOString().substring(0,10),
      stars : new Array<String>()
   }
    this.arrayReviews.push(this.temp);

if ( this.arrayReviews.length > 0 ){
  this.alertNuovaRecensione = true ;
}
    this._CONTENT = {
      ReviewsList: this.arrayReviews
   };
 this.DBistance.addDocument(this._COLL,
                            this.idReview,
                            this._CONTENT)
         .then((data: any) => {
            console.dir(data);
         })
         .catch((error: any) => {
            console.dir(error);
         });
         this.navCtrl.push(NewsPage);
  }

  presentAlert() {
    if (this.alertNuovaRecensione == true){
       let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'La recensione è stata creata con successo!',
          buttons: ['Ok'],
        });
        alert.present();
        } else {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'La recensione non è stata creata con successo!',
          buttons: ['Ok']
        });
        alert.present();
       };
    }

}

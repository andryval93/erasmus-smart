import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/stepperService';
import { InserisciRecensionePage } from '../inserisci-recensione/inserisci-recensione';
import { HomePage } from '../home/home';
import { LoginService } from '../../providers/service/loginService';
import { ReviewsListPage } from '../reviews-list/reviews-list';


/**
 * Generated class for the StepperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

   selector: 'page-stepper',
   templateUrl: 'stepper.html'

})



export class StepperPage {
   clickMessage = '';
   hide: boolean;
   show: boolean;
   prova: String;
   sceltaTutor: any;
   sceltaSede: any;
   hideConferma: boolean;
   arrayAccounts: any;
   locationsAccount: any;
   temp: { status: string; };
   _CONTENT2: { students: any; };
   listaTutors: any;



   onChangeTutor(SelectedValue: any) {
      console.log("Selected:", SelectedValue);
      this.sceltaTutor = SelectedValue;
      if (this.sceltaSede != undefined && this.sceltaTutor != undefined) {
         this.hideConferma = true
      } else this.hideConferma = false;
   }

   onChangeSede(SelectedValue: any) {
      console.log("Selected:", SelectedValue);
      this.sceltaSede = SelectedValue;
      if (this.sceltaSede != undefined && this.sceltaTutor != undefined) {
         this.hideConferma = true
      } else this.hideConferma = false;
   }


   onClickMe() {
      this.hide = false;
      this.show = true;
      this.hideConferma = false;

   }
   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description      Defines the name of the database collection
    */
   private _COLL: string = "Sedi";
  
   /**
      * @name _CONTENT
      * @type {any}
      * @private
      * @description      Used to store/provide the initial document data for the database collection
      */
   private _CONTENT: any;
   /**
    * @name locations
    * @type {any}
    * @public
    * @description      Property to store the returned documents from the database collection
    */
   public locations: any;
   mode: string;

   constructor(public navCtrl: NavController,
      private DBistance: ServiceProvider,
      private loginService: LoginService) {
      this.mode = "horizontal";
      this.hide = true;


   }

   selectChange(e: any) {

      console.log(e);
   }
   inserisciRecensionePush() {
      this.navCtrl.push(InserisciRecensionePage);
   }
   HomePagePush() {
      this.navCtrl.push(HomePage);
   }
   goToReviewList(str: any) {

      localStorage.setItem("University", str);
      this.navCtrl.push(ReviewsListPage, { University: str });
   }







   ionViewDidEnter() {
      this.retrieveCollection();
   }
   /**
* Retrieve all documents from the specified collection using the
* getDocuments method of the DatabaseProvider service
*
* @public
* @method retrieveCollection
* @return {none}
*/
   retrieveCollection(): void {
      this.DBistance.getDocuments(this._COLL)
         .then((data) => {
            this.locations = data;
         })
         .catch();

      this.DBistance.getDocuments("Account")
         .then((data) => {
            this.locationsAccount = data;
            this.creaListaTutor();
         })
         .catch();
   }
   creaListaTutor() {
   this.listaTutors = new Array<string>();
      for (let i = 0; i < this.locationsAccount.length; i++) {
         var str1 = new String(this.locationsAccount[i].userType);
         if (str1.localeCompare("tutor") == 0) {
            var str2 = this.locationsAccount[i].name + " " + this.locationsAccount[i].surname;
            this.listaTutors.push(str2.substring(0));
         }
      }
   }
   /**
  * Creates the collection and populates that with an initial document
  * using the createAndPopulateDocument method of the DatabaseProvider
  * service
  *
  * @public
  * @method generateCollectionAndDocument
  * @return {none}
  */


   saveDocument(): void {

      /*controlli negli ngIF */
      this.hide = false;
      this.show = true;
      this.hideConferma = false;
      /*                  */

      let idDocumento: string;

      var email = new String(this.loginService.user.email);
      for (let i = 0; i < this.locationsAccount.length + 1; i++) {
         var str1 = new String(this.locationsAccount[i].name + " " + this.locationsAccount[i].surname);

         console.log(str1 + "nome + cognome Tutor");
         console.log(str1.localeCompare(this.sceltaTutor.substring(0)) + " comparison");
         console.log(this.locationsAccount[i].students);
         if (str1.localeCompare(this.sceltaTutor.substring(0)) == 0) {

            this.arrayAccounts = this.locationsAccount[i].students;

            idDocumento = this.locationsAccount[i].id;
            break;
         }

         console.log(email + "email Loggato")
         this._CONTENT = {
            status: "pending",
            sede: this.sceltaSede
         };

         /* aggiungo status e sede a uno studente */
         this.DBistance.addDocument("Account",
            email.substring(0),
            this._CONTENT)
            .then((data: any) => {
               console.dir(data);
            })
            .catch((error: any) => {
               console.dir(error);
            });
      }
      /* aggiorno la lista di studenti in attesa */

      this.arrayAccounts.push(email.substring(0));
      this._CONTENT2 = {
         students: this.arrayAccounts,
      };


      this.DBistance.addDocument("Account",
         idDocumento,
         this._CONTENT2)


   }
}

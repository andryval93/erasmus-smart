import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QeaServiceProvider } from '../../providers/service/qeaService';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { StepService } from '../../providers/service/stepService';
import { NewsPageComponent } from '../news/news';



/**
 * Generated class for the NuovadomandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
   selector: 'page-nuovadomanda',
   templateUrl: 'nuovadomanda.html',
})
export class NuovadomandaPageComponent {

   /** 
     * @name Domanda
     * @type {string}
     * @public
     * @description     Model for Domanda form field
     */
   public Domanda: string = '';



   /** 
    * @name Descrizione
    * @type {string}
    * @public
    * @description     Model for Descrizione form field
    */
   public Descrizione: string = '';

   /**
     * @name form
     * @type {object}
     * @public
     * @description     Defines an object for handling form validation
     */
   public form: any;

   /**
   * @name _COLL
   * @type {string}
   * @private
   * @description      Defines the name of the database collection
   */
   private _COLL: string = "Q&A";

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

   /**
     * @name docID
     * @type {String}
     * @public
     * @description     property that stores an edited document's docID
     */
   public docID: String = "";

   Domande: { Domanda: any; Descrizione: any; };
   arrayDomande: any;
   temp: { Domanda: any; Descrizione: any; risposte: String[]; };
   sceltaSede: String;
   alertNuovaDomanda: boolean;



   constructor(public navCtrl: NavController,
      private DBistance: QeaServiceProvider,
      private DBistanceSedi: StepService,
      private alertCtrl: AlertController,
      private _FB: FormBuilder, ) {
      this.form = this._FB.group({
         'Domanda': ['', Validators.required],
         'Descrizione': ['', Validators.required]
      });

      this.alertNuovaDomanda = false;

   }

   ionViewDidLoad() {
      console.log('ionViewDidLoad NuovadomandaPage');
   }
   /**
       * Retrieve all documents from the specified collection using the
       * retrieveCollection method when the view is entered
       *
       * @public
       * @method ionViewDidEnter
       * @return {none}
       */
   ionViewDidEnter() {
      this.retrieveCollection();
      this.retrieveCollectionSedi();
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
      this.DBistance.getQuestions(this._COLL)
         .then((data) => {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!

            this.locations = data;

         })
         .catch();
   }

   /** Inserimento della box delle sedi */

   /**
    * @name _COLLSedi
    * @type {string}
    * @private
    * @description      Defines the name of the database collection
    */
   private _COLLSedi: string = "Reviews";

   /**
    * @name locationsSedi
    * @type {any}
    * @public
    * @description      Property to store the returned documents from the database collection
    */
   public locationsSedi: any;



   /**
       * Retrieve all documents from the specified collection using the
       * getDocuments method of the DatabaseProvider service
       *
       * @public
       * @method retrieveCollectionSedi
       * @return {none}
       */
   retrieveCollectionSedi(): void {
      this.DBistanceSedi.getStepsDocuments(this._COLLSedi)
         .then((dataSedi) => {

            this.locationsSedi = dataSedi;
         })
         .catch();
   }





   /**
    * Saves form data as newly added/edited record within Firebase Realtime
    * database and handles uploading of media asset to Firebase Storage
    *
    * @public
    * @method saveDocument
    * @param  val          {any}              Form data
    * @return {none}
    */

   saveDocument(val: any): void {


      let idDocumento: string;
      for (let i = 0; 1 < this.locations.length; i++) {
         var str1 = new String(this.locations[i].Sede);
         console.log(str1.localeCompare(this.sceltaSede.substring(0)) + " localeCompare");
         if (str1.localeCompare(this.sceltaSede.substring(0)) == 0) {
            if(this.locations[i].Domande == undefined){
               this.arrayDomande = new Array<any>();
            }
            else{
            this.arrayDomande = this.locations[i].Domande;
            }
            console.log(this.arrayDomande + " arrayDomande");
            idDocumento = this.locations[i].id;
            break;
         } if (i == this.locations.length - 1) {
            idDocumento = "Errori";
            break;

         }
         console.log(this.locations[i].Sede);
         console.log(this.sceltaSede);
         console.log(idDocumento);
         console.log(this.locations[i].id);
      }

      this.temp = {
         Domanda: this.form.controls["Domanda"].value,
         Descrizione: this.form.controls["Descrizione"].value,
         risposte: new Array<String>()
      }
      this.arrayDomande.push(this.temp);

      if (this.arrayDomande.length > 0) {
         this.alertNuovaDomanda = true;
      }
      this._CONTENT = {
         Domande: this.arrayDomande
      };

      this.arrayDomande = null;
      this.DBistance.insertQuestion(this._COLL,
         idDocumento,
         this._CONTENT)
         .then((data: any) => {
            console.dir(data);
         })
         .catch((error: any) => {
            console.dir(error);
         });
      this.navCtrl.setRoot(NewsPageComponent);
   }

   onChangeSede(SelectedValue: any) {
      console.log("Selected:", SelectedValue);
      this.sceltaSede = SelectedValue;
   }

   presentAlert() {
      if (this.alertNuovaDomanda == true) {
         let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'La domanda è stata creata con successo!',
            buttons: ['Ok']
         });
         alert.present();
      } else {
         let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'La domanda non è stata creata con successo!',
            buttons: ['Ok']
         });
         alert.present();
      };
   }

}



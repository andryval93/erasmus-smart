import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuovaDomandaServiceProvider } from '../../providers/service/nuovaDomandaService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/stepperService';
import { analyzeAndValidateNgModules } from '@angular/compiler';


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
export class NuovadomandaPage {

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
    * @name _DOC
    * @type {string}
    * @private
    * @description      Defines the initial document ID for the database collection
    */
   private _DOC: string = "7PcE7STVlaVGTD9DDW6q";
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


   constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private DBistance: NuovaDomandaServiceProvider,
      private DBistanceSedi: ServiceProvider,
      private _FB: FormBuilder, ) {

      this.form = _FB.group({
         'Domanda': ['', Validators.required],
         'Descrizione': ['', Validators.required]
      });

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
      this.DBistance.getDocuments(this._COLL)
         .then((data) => {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
               this.generateCollectionAndDocument();
            }
            // Otherwise the collection does exist and we assign the returned
            // documents to the public property of locations so this can be
            // iterated through in the component template
            else {
               this.locations = data;
            }
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
   private _COLLSedi: string = "Sedi";

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
      this.DBistanceSedi.getDocuments(this._COLLSedi)
         .then((dataSedi) => {

            this.locationsSedi = dataSedi;
         })
         .catch();
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
   generateCollectionAndDocument(): void {
      this.DBistance.createAndPopulateDocument(this._COLL,
         this._DOC,
         this._CONTENT)
         .then((data: any) => {
            console.dir(data);
         })
         .catch((error: any) => {
            console.dir(error);
         });
   }
   // wffwfwefweefwefwefwe


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
      let stringaSede: string;

      for (let i = 0; 1 < this.locations.length; i++) {
         var str1 = new String(this.locations[i].Sede);
         if (str1.localeCompare(this.sceltaSede.substring(0)) == 0) {
            this.arrayDomande = this.locations[i].Domande;
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

      // this.arrayDomande = this.locations[0].Domande;
      // console.log(this.locations[1].Sede);



      this.temp = {
         Domanda: this.form.controls["Domanda"].value,
         Descrizione: this.form.controls["Descrizione"].value,
         risposte: new Array<String>()
      }
      this.arrayDomande.push(this.temp);
      this._CONTENT = {
         Domande: this.arrayDomande
      };
      this.arrayDomande = null;
      this.DBistance.addDocument(this._COLL,
         idDocumento,
         this._CONTENT)
         .then((data: any) => {
            console.dir(data);
         })
         .catch((error: any) => {
            console.dir(error);
         });

   }

   onChangeSede(SelectedValue: any) {
      console.log("Selected:", SelectedValue);
      this.sceltaSede = SelectedValue;
   }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, Nav,} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QeaServiceProvider } from '../../providers/service/qeaService';
import { NuovadomandaPage } from '../nuovadomanda/nuovadomanda';
import { RispostePage } from '../risposte/risposte';

/**
 * Generated class for the QeaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qea',
  templateUrl: 'qea.html',
})
export class QeaPage {
   title:string = "Q&A";
   nav: Nav;
   
  
  /**
   * @name _COLL
   * @type {string}
   * @private
   * @description      Defines the name of the database collection
   */
  private _COLL 		: string 			= "Q&A";
  /**
   * @name _DOC
   * @type {string}
   * @private
   * @description      Defines the initial document ID for the database collection
   */
  private _DOC 		: string 			= "7PcE7STVlaVGTD9DDW6q";
/**
   * @name _CONTENT
   * @type {any}
   * @private
   * @description      Used to store/provide the initial document data for the database collection
   */
  private _CONTENT  	: any;
  /**
   * @name locations
   * @type {any}
   * @public
   * @description      Property to store the returned documents from the database collection
   */
  public locations     : any;
  mode: string;
  constructor(public navCtrl        : NavController,
              private DBistance     : QeaServiceProvider){
              }
              
              selectChange(e) {
                console.log(e);
              }

             openAddPage() {
               this.navCtrl.push(NuovadomandaPage)
             }
             openPageRisposte(Domanda:string , tutteRisposte: Array<String>) {
               localStorage.setItem("Domanda", Domanda);
               localStorage.setItem("list_Risposte", JSON.stringify(tutteRisposte));
               
               this.navCtrl.push(RispostePage)
             }
             /**
    * Retrieve all documents from the specified collection using the
    * retrieveCollection method when the view is entered
    *
    * @public
    * @method ionViewDidEnter
    * @return {none}
    */
   ionViewDidEnter()
   {
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
   retrieveCollection() : void
   {
      this.DBistance.getDocuments(this._COLL)
      .then((data) =>
      {
       // IF we don't have any documents then the collection doesn't exist
         // so we create it!
         if(data.length === 0)
         {
            this.generateCollectionAndDocument();
         }
         // Otherwise the collection does exist and we assign the returned
         // documents to the public property of locations so this can be
         // iterated through in the component template
         else
         {
            this.locations = data;
         }
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
   generateCollectionAndDocument() : void
   {
      this.DBistance.createAndPopulateDocument(this._COLL,
                                        this._DOC,
                                         this._CONTENT)
      .then((data : any) =>
      {
         console.dir(data);
      })
      .catch((error : any) =>
      {
         console.dir(error);
      });
 }



}

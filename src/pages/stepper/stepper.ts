import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/stepperService';
import { InserisciRecensionePage } from '../inserisci-recensione/inserisci-recensione';
import { HomePage } from '../home/home';



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
  
   
   onChangeTutor(SelectedValue: any){
      console.log("Selected:",SelectedValue);
      this.sceltaTutor = SelectedValue;
      if(this.sceltaSede !=undefined && this.sceltaTutor!=undefined)
      {
      this.hideConferma=true
      }else this.hideConferma=false;
    }

    onChangeSede(SelectedValue: any){
      console.log("Selected:",SelectedValue);
      this.sceltaSede = SelectedValue;
      if(this.sceltaSede !=undefined && this.sceltaTutor!=undefined)
      {
      this.hideConferma=true
      }else this.hideConferma=false;
    }


   onClickMe() {
     this.hide=false;
     this.show=true;
     this.hideConferma=false;
    
   }
  /**
   * @name _COLL
   * @type {string}
   * @private
   * @description      Defines the name of the database collection
   */
  private _COLL 		: string 			= "Sedi";
  /**
   * @name _DOC
   * @type {string}
   * @private
   * @description      Defines the initial document ID for the database collection
   */
  private _DOC 		: string 			= "yvihlDIrC80IEkg4cYtY";
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
              private DBistance     : ServiceProvider){
                this.mode = "horizontal";
              this.hide=true;
             
              
              }
            
              selectChange(e: any) {
            
                console.log(e);
              }
              inserisciRecensionePush(){
                 this.navCtrl.push(InserisciRecensionePage);
              }
              HomePagePush(){
               this.navCtrl.push(HomePage);
            }
              


    /* Retrieve all documents from the specified collection using the
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

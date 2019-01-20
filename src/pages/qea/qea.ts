import { Component } from '@angular/core';
import { IonicPage, NavController, Nav, } from 'ionic-angular';
import { QeaServiceProvider } from '../../providers/service/qeaService';
import { NuovadomandaPageComponent } from '../nuovadomanda/nuovadomanda';
import { RispostePageComponent } from '../risposte/risposte';

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
export class QeaPageComponent {
   title: string = "Q&A";
   nav: Nav;


   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description      Defines the name of the database collection
    */
   private _COLL: string = "Q&A";
  
   /**
    * @name locations
    * @type {any}
    * @public
    * @description      Property to store the returned documents from the database collection
    */
   public locations: any;
   mode: string;
   constructor(public navCtrl: NavController,
      private DBistance: QeaServiceProvider) {
   }

   selectChange(e) {
      console.log(e);
   }

   openAddPage() {
      this.navCtrl.push(NuovadomandaPageComponent)
   }
   openPageRisposte(Domanda: string, tutteRisposte: Array<String>, location: any, Descrizione: any) {
      localStorage.setItem("Domanda", Domanda);
      localStorage.setItem("list_Risposte", JSON.stringify(tutteRisposte));
      localStorage.setItem("locationIdQeA", location);
      localStorage.setItem("Descrizione", Descrizione);
      this.navCtrl.push(RispostePageComponent)
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
      this.DBistance.getAnswers(this._COLL)
         .then((data) => {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
          
          
               this.locations = data;   
         })
         .catch();
   }






}

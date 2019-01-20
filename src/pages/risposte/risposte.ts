import { Component } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { QeaServiceProvider } from '../../providers/service/qeaService';
import { NewsPageComponent } from '../news/news';


/**
 * Generated class for the RispostePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risposte',
  templateUrl: 'risposte.html',
})
export class RispostePageComponent {
  nav: Nav;


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
       * @name form
       * @type {object}
       * @public
       * @description     Defines an object for handling form validation
       */
  public form: any;

  ArrayData: Array<String>;
  visualizzaFormVar: boolean = false;
  visualizzaRispondiButton: boolean = true;
  visualizzaInviaButton: boolean = false;
  Domanda: string;
  locationQeA: any;
  locationIdQeA: string;
  domandaCorrente: string;
  descrizioneCorrente: string;
  locationDescrizione: string;
  alertNuovaDomanda: boolean;

  constructor(public navCtrl: NavController,
    private DBistance: QeaServiceProvider,
    private _FB: FormBuilder,
    private alertCtrl: AlertController) {
    this.alertNuovaDomanda = false;
    this.form = this._FB.group({
      'Descrizione': ['', Validators.required]
    });
    this.domandaCorrente = localStorage.getItem("Domanda");
    this.descrizioneCorrente = localStorage.getItem("Descrizione");
    this.locationIdQeA = localStorage.getItem("locationIdQeA");
    this.locationDescrizione = localStorage.getItem("Descrizione");
    localStorage.removeItem("locationQeA");
    localStorage.removeItem("locationIdQeA");
    localStorage.removeItem("Descrizione");
    //passi la lista delle risposte proveniente da qea.ts
    this.ArrayData = JSON.parse(localStorage.getItem("list_Risposte"));
  }

  openAddPage() {
    this.navCtrl.setRoot(NewsPageComponent);
  }

  selectChange(e) {
    console.log(e);
  }

  saveDocument(any: any) {
    console.log(this.domandaCorrente + "---domandaCorrente");
    console.log(this.locationIdQeA + "---locationIdQeA");

    console.log(localStorage.getItem("locationIdQeA") + "commento");

    for (let i = 0; 1 < this.locations.length; i++) {
      console.log("sono dentro al primo for");
      var str = new String(this.locations[i].id);
      console.log(this.locations[i].id + "this.locations[i].id");
      console.log(str.localeCompare(this.locationIdQeA.substring(0)) + "localeCompare");
      if (str.localeCompare(this.locationIdQeA.substring(0)) == 0) {
        this.locationQeA = this.locations[i];
        console.log(this.locationQeA.Domande.length + " -this.locationQeA.Domande.length");
        console.log(this.locationQeA.Sede + " -locationQeA.Sede");
        break;
      }

    }

    for (let j = 0; 1 < this.locationQeA.Domande.length +1; j++) {
      console.log("sono dentro al secondo for");
      var str1 = new String(this.locationQeA.Domande[j].Domanda);
      var str2 = new String(this.locationQeA.Domande[j].Descrizione);
      console.log(this.locationQeA.Domande[j].Domanda + " -locationQeA.Domande[i].Domanda");
      console.log(this.locationDescrizione.substring(0) + " -locationDescrizione");
      if (str1.localeCompare(this.domandaCorrente.substring(0)) == 0) {
        if (str2.localeCompare(this.locationDescrizione.substring(0)) == 0) {
          this.locationQeA.Domande[j].risposte.push(this.form.controls["Descrizione"].value);
          this.alertNuovaDomanda = true;
          break;
        }
      }
    }


    /* if (this.locationQeA.Domande.risposte.length > 0) {
      this.alertNuovaDomanda = true;
   }
   */
    if (this.locationQeA.Domande == undefined) {
      this.locationQeA.Domande == new Array<any>();
    }
    this._CONTENT = {
      Domande: this.locationQeA.Domande,
    };
    this.DBistance.insertAnswer(this._COLL,
      this.locationIdQeA,
      this._CONTENT,
    )
      .then((data: any) => {
        console.dir(data);
      })
      .catch((error: any) => {
        console.dir(error);
      });
  }



  visualizzaForm() {
    this.visualizzaFormVar = true;
    this.visualizzaRispondiButton = false;
    this.visualizzaInviaButton = true;
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
* getAnswers method of the DatabaseProvider service
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

        // Otherwise the collection does exist and we assign the returned
        // documents to the public property of locations so this can be
        // iterated through in the component template

        this.locations = data;

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

  presentAlert() {
    if (this.alertNuovaDomanda == true) {
      let alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'La risposta è stata creata con successo!',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'La risposta non è stata creata con successo!',
        buttons: ['Ok']
      });
      alert.present();
    };
  }


}


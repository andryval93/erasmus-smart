import { Component, QueryList, ContentChildren, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, Content } from 'ionic-angular';
import { StepService } from '../../providers/service/stepService';
import { InserisciRecensionePageComponent } from '../inserisci-recensione/inserisci-recensione';
import { AccountService } from '../../providers/service/accountService';
import { ReviewsListPageComponent } from '../reviews-list/reviews-list';
import { NewsPageComponent } from '../news/news';
import { ConsiglicolloquioPageComponent } from '../consiglicolloquio/consiglicolloquio';
import { GuidaLAPageComponent } from '../guida-LA/guida-LA';
import { IonicStepComponent, IonicStepperComponent } from 'ionic-stepper';
import { GuidaCandidaturaPageComponent } from '../guidacandidatura/guidacandidatura';
//import { IonicStepperComponent } from 'ionic-stepper';
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



export class StepperPageComponent {

   clickMessage = '';
   hide: boolean;
   show: boolean;
   prova: String;
   sceltaTutor: any;
   sceltaSede: any;
   hideConferma: boolean;
   arrayAccounts: any;
   sedeSceltaAccount: String;
   tutorAccount: String;

   temp: { status: string; };
   _CONTENT2: { students: any; };
   listaTutors: any;
   locationsAccount: any;
   _CONTENT3: { step: any; };
   statusAccepted: boolean;
   statusPending: boolean;
   invisibleStepDiv: boolean;

   swiper: any;
   slidesHtml: { title: string; description: string; image: string; }[];

   


   retrieveCollection(): void {
      this.DBistance.getStepsDocuments(this._COLL)
         .then((data) => {
            this.locations = data;
         })
         .catch();

      this.DBistance.getStepsDocuments("Account")
         .then((data2) => {
            this.locationsAccount = data2;
            this.creaListaTutor();
            this.stepperState();

         })
         .catch();

   }

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
   private _COLL: string = "Reviews";

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
   /*stepper logic */
   disabled: boolean;
   _selectedIndex = 0;
   @ContentChildren(IonicStepComponent) _steps: QueryList<IonicStepComponent>;

   @Input()
   get selectedIndex(): number {
      return this._selectedIndex;
   }

   set selectedIndex(index: number) {
      this._selectedIndex = index;
      this.selectIndexChange.emit(this._selectedIndex);
   }

   @Output() selectIndexChange: EventEmitter<number> = new EventEmitter<number>();

   /* fine */
   @ViewChild('slider') slides: Slides;
   @ViewChild('stepper') stepper: IonicStepperComponent;
   @ViewChild(Content) content: Content;

   constructor(public navCtrl: NavController,
      private DBistance: StepService,
      private loginService: AccountService
   ) {

      this.mode = "horizontal";
      this.hide = true;

      this.slidesHtml = [
         {
            title: "Welcome to the Docs!",
            description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
            image: "assets/imgs/Tenerife.jpg",
         },
         {
            title: "What is Ionic?",
            description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
            image: "assets/imgs/Tenerife.jpg",
         },
         {
            title: "What is Ionic Cloud?",
            description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
            image: "assets/imgs/Tenerife.jpg",
         }
      ];

   }
   slideChanged() {
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
   }

   slideNext() {
      this.slides.slideNext();

   }
   slidePrevious() {
      this.slides.slidePrev();
   }

   /*comandi slide foto */
   /*goToSlide() {
      this.slides.pager = true ;
      this.slides.paginationType = "progress";
      this.slides.effect = "cube"
      this.slides.enableKeyboardControl(true);
      this.slides.slideTo(2, 500);
    }
    slideChanged() {
    
      
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
    }
    /* fine slider */

   selectChange(e: any) {
      var email = new String(this.loginService.user.email);

      this._CONTENT3 = {
         step: e
      };

      this.DBistance.addStepsDocument("Account",
         email.substring(0),
         this._CONTENT3)

      console.log(e);
   }
   inserisciRecensionePush() {
      this.navCtrl.push(InserisciRecensionePageComponent);
   }
   HomePagePush() {
      this.navCtrl.setRoot(NewsPageComponent);

   }
   goToReviewList(str: any) {

      localStorage.setItem("University", str);
      this.navCtrl.push(ReviewsListPageComponent, { University: str });
   }

   /* Ricorda l'ultimo Step visitato (per un dato account) e se nell'account di firebase non
       esiste lo crea */

   stepperState() {

      var email = new String(this.loginService.user.email);
      var accepted = new String("accepted");
      var pending = new String("pending");


      for (let i = 0; 1 < this.locationsAccount.length; i++) {
         var str2 = new String(this.locationsAccount[i].id);


         if (str2.localeCompare(email.substring(0)) == 0) {

            var loopIndex = i;
            this.sedeSceltaAccount = this.locationsAccount[i].sede;
            this.tutorAccount = this.locationsAccount[i].tutor;

            let num: number;

            if (this.locationsAccount[i].step == undefined) {
               this._CONTENT3 = {
                  step: 0
               };
               this.DBistance.addStepsDocument("Account",
                  email.substring(0),
                  this._CONTENT3)
               this.navCtrl.setRoot(StepperPageComponent);
            }


            num = this.locationsAccount[i].step;
            if (num == this.stepper._steps.length - 1) {
               this.stepper.setStep(0);
               for (let i = 0; i < this.stepper._steps.length - 1; i++) {
                  this.stepper.nextStep();
               }

            }
            else {
               this.stepper.setStep(num);

            }

            break;
         }

      }
      if (this.sedeSceltaAccount != undefined && this.tutorAccount != undefined) {
         this.hide = false;
         this.show = true;
         this.hideConferma = false;
         this.sceltaTutor = this.tutorAccount;
         this.sceltaSede = this.sedeSceltaAccount;
      }
      if (this.tutorAccount != undefined) {
         if (this.sceltaTutor.localeCompare(this.tutorAccount.substring(0)) == 0) {
            for (let i = 0; i < this.locationsAccount.length; i++) {
               var str1 = new String(this.locationsAccount[i].id);
               if (str1.localeCompare(this.sceltaTutor.substring(0)) == 0) {
                  this.sceltaTutor = this.locationsAccount[i].name + " " + this.locationsAccount[i].surname;
                  break;
               }
            }
         }
      }
      var strStatus = new String(this.locationsAccount[loopIndex].status);
      console.log(this.locationsAccount[loopIndex].status + " this.locationsAccount[loopIndex].status")
      if (strStatus == undefined) {
         this.statusPending = false;
         this.statusAccepted = false;
      }
      if (strStatus.localeCompare(accepted.substring(0)) == 0) {
         this.statusAccepted = true;

      }

      if (strStatus.localeCompare(pending.substring(0)) == 0) {

         this.statusPending = true;

      }



   }
   ionViewDidEnter() {
      this.invisibleStepDiv = true;
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
      this.statusPending = true;
      /*                  */

      let idDocumento: string;

      var email = new String(this.loginService.user.email);
      for (let i = 0; i < this.locationsAccount.length; i++) {
         var str1 = new String(this.locationsAccount[i].name + " " + this.locationsAccount[i].surname);

         console.log(str1 + "nome + cognome Tutor");
         console.log(str1.localeCompare(this.sceltaTutor.substring(0)) + " comparison");
         console.log(this.locationsAccount[i].students);
         if (str1.localeCompare(this.sceltaTutor.substring(0)) == 0) {
            this.arrayAccounts = this.locationsAccount[i].students;
            idDocumento = this.locationsAccount[i].id;

            break;
         }
         //if(i+1 == this.locationsAccount.length) break;


      }
      console.log(email + "email Loggato")
      this._CONTENT = {
         status: "pending",
         sede: this.sceltaSede,
         tutor: idDocumento
      };

      /* aggiungo status e sede a uno studente */
      this.DBistance.addStepsDocument("Account",
         email.substring(0),
         this._CONTENT)
         .then((data: any) => {
            console.dir(data);
         })
         .catch((error: any) => {
            console.dir(error);
         });
      /* aggiorno la lista di studenti in attesa */
      if (this.arrayAccounts == undefined) this.arrayAccounts = new Array<string>();
      this.arrayAccounts.push(email.substring(0));

      this._CONTENT2 = {
         students: this.arrayAccounts,
      };


      this.DBistance.addStepsDocument("Account",
         idDocumento,
         this._CONTENT2)


   }
   goToGuidaLA() {
      this.navCtrl.push(GuidaLAPageComponent);
   }
   goToGuidaColloquio() {
      this.navCtrl.push(ConsiglicolloquioPageComponent);
   }
   goToGuidaCandidatura() {
      this.navCtrl.push(GuidaCandidaturaPageComponent);
   }
 
}

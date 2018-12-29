import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpenchatPage } from '../openchat/openchat';
import { AccountService } from '../../providers/service/accountService';
import { Account, student } from '../../model/model';
/**
 * Generated class for the UiChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ui-chat',
  templateUrl: 'ui-chat.html',
})
export class UiChatPage{
  account: Account;
  items: Array<any>;
  student: student;
  type: string;
  status: string;
  email: string;
  accepted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DBInstance: AccountService) {
    this.email = localStorage.getItem("email");
    DBInstance.getAccount('Account', this.email, this.account);
    for(var i = 0; i < this.account.students.length; i++){
      DBInstance.getAccount('Account', this.account.students[i].email, this.student);
      if(this.account.students[i].status == "pending"){
        this.accepted = false;
      } else {
        this.accepted = true;
      }
        this.items.push({
          name: this.student.name,
          surname: this.student.surname,
          sede: this.student.sede,
          accepted: this.accepted
        });
      console.log(this.account.students[i].email); 
    };
  }
    //caricamento della lista dal db 
   /* this.items.push({
      nome: "Pino",
      sede: "Gragnano"
    });
    this.items.push({
      nome: "Francesco",
      sede: "Polla"
    });
    this.items.push({
      nome: "Pippo Baudo",
      sede: "Varese"
    });
    this.items.push({
      nome: "Renzi",
      sede: "Milano"
    });
    this.items.push({
      nome: "Zio Ciccio",
      sede: "Piazza Italia"
    });*/

  public isSearchbarOpened = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiChatPage');
    this.type = localStorage.getItem("type");
    this.status = localStorage.getItem("status");
    if(this.status != null || this.status != "pending"){
      if(this.type == "student"){
        this.navCtrl.push(OpenchatPage);
      }
      //else if(this.type == "tutor"){
        
        //Metodo per prendere la lista di studenti dal tutor
     // }
    } else {
      console.log("ERRORE");
    }
    /*
    *
    
    Step4: Quando l'utente sceglie il tutor attraverso account service si aggiunge al tutor nel campo students l'id dello studente
    e nel documento dello studente viene aggiunto nel campo tutor l'id del tutor con status pending

    * 1° Controllare il tipo di utente loggato
    * 
    *  1.1: Se tutor accedi al proprio documento nella collection "Account" e visualizza la lista degli studenti presente nel campo di tipo mappa students. 
    *  Questa mappa contiene un serie di oggetti che hanno 2 campi id dello studente e status dello studente che può essere active | pending
    * 
    *  Nota: se nel documento del tutor loggato il campo sutents è vuoto o non esiste mostriamo un messagio che dice che nessuno studente è associato al tutor
    *  
    * 
    *  2.1: Se studente accede al proprio documento e recupera l'id del tutor che ha scelto e viene rimandato direttamente alla chat con il tutor se è stato accettato 
    *  quindi quando il tutor accetta lo studente nel documento dello studente nel campo tutor ci sarà un oggetto formato da 2 campi id del tutor e status active | pending
    *  
    *  Nota: se nel documento dello studente loggato il campo tutor e null o non esiste a video viene mostrato un messaggio che dice di completare lo step 4 del procedimento per poter chattar 
    *  
    *  
    *  3.1 Quando il tutor accetta uno studente viene creato un documento nella collections "chats" che ha come partecipanti il tutor e lo studente e si usa
    *  l'id di questo documento come chatID
    *  
    *  3.2 Quando uno dei 2 invia un messaggio viene aggiunto un documento nella collections "messages" che ha le seguenti informazioni:
    *  -ID mittente
    *  -ID destinatario
    *  -Testo del messaggio
    *  -Data di invio
    * 
    *  
    *  3.3 Quando l'utente è connesso in chat usiamo le API di firebase per ascoltare aggiunte di documenti fatte nella collections "messages" e che hanno il chatID associato ai 2 partecipanti
    *  
    *  3.4 Quando l'utente arriva nella chat viene semplicemente fatta  una lettura di tutti i documenti presenti i chats e vengono mostrati nella chat attuale
    * 
    */
  }
  
  openChat(nome, sede){
   // localStorage.setItem("nome", nome);
   // localStorage.setItem("sede", sede);
    this.navCtrl.push(OpenchatPage, {"nome":nome, "sede":sede});
  }
}


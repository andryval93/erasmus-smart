import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpenchatPageComponent } from '../openchat/openchat';
import { AccountService } from '../../providers/service/accountService';
import { MessageProvider } from '../../providers/service/messagingService';
import { Account, student, Message, File} from '../../model/model';
import firebase from 'firebase';
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
export default class UiChatPageComponent{
  account: Account;
  items: Array<any>;
  student: student;
  students: Array<string>;
  type: string;
  status: string;
  email: string;
  messagge: Array<Message>;
  files: Array<File>;  
  account2: Account;
  viewPage: boolean;
  viewLoad: boolean;
  tutor: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public DBAccountInstance: AccountService, public DBMessaggingInstance: MessageProvider) {

    this.viewPage = true;
    this.viewLoad = true;
    this.account = new Account();
    this.student = new student();
    this.students = [];
    this.items = [];
    var i = 0;
      
      this.DBAccountInstance.getTypeAccount("Account", firebase.auth().currentUser.email).then((type) => {
      this.type = type;
      console.log('TESTINTYPE', this.status, this.type);
      if(this.type == "tutor"){
        this.viewPage = true;
        DBAccountInstance.getAccount('Account', firebase.auth().currentUser.email).then((data)=>{this.account.setEmail(data.data().email)
                                                                            this.account.setName(data.data().name)
                                                                            this.account.setSurname(data.data().surname)
                                                                            this.account.setType(data.data().userType)
                                                                            this.account.setStudents(data.data().students)
        }).then(()=>{
          console.log(this.account);
          console.log(this.students);
          console.log("ciao", this.account.getStudents());
          this.students = this.account.getStudents();
          console.log(this.students);
          if(this.students.length == 0){
            this.viewPage = false;
          }
          for(; i < this.students.length; i++){
            DBAccountInstance.getAccount('Account', this.students[i]).then((data)=>{this.student.setEmail(data.data().email)
                                                                            this.student.setName(data.data().name)
                                                                            this.student.setSurname(data.data().surname)
                                                                            this.student.setStatus(data.data().status)
                                                                            this.student.setSede(data.data().sede)
            }).then(()=>{
                this.items.push({
                  email: this.student.email,
                  name: this.student.name,
                  surname: this.student.surname,
                  sede: this.student.sede,
                  status: this.student.status
                });
              }); 
          };
        });
        this.viewLoad = false;
        
      }
      else if(this.type == "student"){
        DBAccountInstance.getStudentStatus("Account", this.email).then((status)=>{
          console.log('TESTINSTATUS', this.status, this.type);
          this.status = status;
        })
      }
    });
  }
    
  acceptRequest(emailStudent: string){
    let emailTutor = firebase.auth().currentUser.email;
    this.DBAccountInstance.acceptRequest(emailStudent, emailTutor);
    console.log("test", firebase.auth().currentUser.email+emailStudent);
    let object = {
      created: true
    }
    console.log("Prima", this.items);
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].email == emailStudent){
        this.items[i].status = "accepted"
      }
    }
    console.log("Dopo", this.items);
    this.DBMessaggingInstance.startChat(emailTutor+emailStudent, object);
  }

  denyRequest(emailStudent: string){
    this.DBAccountInstance.getAccount('Account', firebase.auth().currentUser.email).then((data)=>{
      this.account.setStudents(data.data().students);
      for(var i = 0; i < this.students.length; i++){
        if(this.students[i]==emailStudent){
          console.log("ListaStudenti", this.students);
          this.students.splice(i);
        }
      }
      for(var z = 0; z < this.items.length; z++){
        if(this.items[z].email==emailStudent){
          console.log("ListaStudenti", this.students);
          this.items.splice(z);
        }
      }
      let obj = {
        students: this.students
      }
      console.log("retesting", this.students)
      this.DBAccountInstance.denyRequest(firebase.auth().currentUser.email, obj);
    });

    //cancellare : status , sede ,tutor , e reimpostare step : con il numero 3
    /*this.DBAccountInstance.getAccount('Account', emailStudent).then((data)=>{
        
    });*/
  }


  public isSearchbarOpened = false;

  openChat(nome, surname, sede, receveir){
    this.navCtrl.push(OpenchatPageComponent, {"name":nome, "surname":surname, "sede":sede, "receveir":receveir, "type":this.type});
  }

  ionViewDidLoad() {

    

    this.email = firebase.auth().currentUser.email;
    this.DBAccountInstance.getTypeAccount("Account", this.email).then((type) => {
      this.type = type;
    }).then(()=>{
      
    
    console.log('TEST1', this.status, this.type);
    if(this.status != null || this.status != "pending"){
      console.log('TEST2', this.status, this.type);
      if(this.type == "student"){
        this.DBAccountInstance.getStudentStatus("Account", this.email).then((status) => {
          this.status = status;
        }).then(()=>{
          if(this.status == null || this.status == "pending"){
            this.viewLoad = false;
            this.viewPage = false;
          }else{
        console.log('TEST3', this.status, this.type);
        this.DBAccountInstance.getAccount("Account", firebase.auth().currentUser.email).then((data)=>{
          this.tutor = data.data().tutor;
        
          console.log("TUTOR", this.tutor);
        }).then(()=>{
          this.DBAccountInstance.getAccount('Account', this.tutor).then((data)=>{this.account.setEmail(data.data().email)
                                                                            this.account.setName(data.data().name)
                                                                            this.account.setSurname(data.data().surname)                                                     
          }).then(() => {       
          console.log("Marianna chiede", this.account);                                                        
          this.openChat(this.account.name, this.account.surname, "Tutor", this.account.email);
        });
      
        });
      }
      });
    }
      else if(this.type == "tutor"){
        //stay in this page
     }
    } else {
      this.viewPage = true;
      console.log("ERRORE");
    }
  });
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
    *  2.1: Se studente accede al proprio documento e recupera l'id del tutor che ha scelto e viene rimandato direttamente alla chat con il tutor se è stato accettato 
    *  quindi quando il tutor accetta lo studente nel documento dello studente nel campo tutor ci sarà un oggetto formato da 2 campi id del tutor e status active | pending
    *  
    *  Nota: se nel documento dello studente loggato il campo tutor e null o non esiste a video viene mostrato un messaggio che dice di completare lo step 4 del procedimento per poter chattar 
    *  
    *  3.1 Quando uno dei 2 invia un messaggio viene aggiunto un documento nella collections "messages" che ha le seguenti informazioni:
    *  -Chats è un array di tipo message formato da una serie di oggetti che ha come param: from, to, testo e data.
    *  
    *  3.1 Quando il tutor accetta uno studente viene creato un documento nella collections "messages" che ha come partecipanti il tutor e lo studente e si usa
    *  l'id di questo documento come chatID
    *  3.2 Quando l'utente è connesso in chat usiamo le API di firebase per ascoltare aggiunte di documenti fatte nella collections "messages" e che hanno il chatID associato ai 2 partecipanti
    *  
    *  3.3 Quando l'utente arriva nella chat viene semplicemente fatta  una lettura di tutti i documenti presenti i chats e vengono mostrati nella chat attuale
    * 
    */
  }

  

 
}


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/service/messagingService'
import firebase from 'firebase';
import { FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the OpenchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-openchat',
  templateUrl: 'openchat.html',
})
export class OpenchatPage {
  
  name: string;
  sede: string;
  surname: string;
  chatOpen: boolean;
  email: string; //email ricevente
  idChat: string;
  text : FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProv: MessageProvider) {
    //this.nome = localStorage.getItem("nome");
    //this.sede = localStorage.getItem("sede");
    //navParams per prendere parametri da NON localStorage

    localStorage.setItem("type", "tutor")
    
    this.text = new FormControl('', Validators.required)

    this.sede = navParams.get("sede");
    this.surname = navParams.get("surname");
    this.name = navParams.get("name");
    this.email = navParams.get("receveir");
    this.chatOpen = true;

    console.log("if:", localStorage.getItem("type") == "tutor")

    if (localStorage.getItem("type") == "tutor")
      this.idChat = firebase.auth().currentUser.email + this.email
    else
      this.idChat = this.email + firebase.auth().currentUser.email
    
    console.log("idChat:", this.idChat)

    //messages esterno che contiene le chat
   // console.log("Mex:", serviceProv.getAllMessages("Messages", this.idChat))

   let messages: any[] = new Array();

    serviceProv.getAllMessages("Messages", this.idChat).then(function(result){
        
        result.forEach(el => {
          messages.push(el)
        });
      });
      
      console.log("Messages:", messages)
  }

  sendUserMessage(){

    let message = {
      message: this.text.value,
      sender: firebase.auth().currentUser.email,
      receiver: this.email,
      creationTime: new Date().toLocaleString()
		};

    this.serviceProv.sendMessage("Messages", this.idChat, message);
    this.text.setValue("");

    console.log("marianna rompi", this.email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenchatPage');
    
  }

  showChat(){
    this.chatOpen = true;
  }

  showFiles(){
    this.chatOpen = false;
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Content, ToastController } from 'ionic-angular';
import { MessageProvider } from '../../providers/service/messagingService'
import firebase from 'firebase';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ServiceProvider } from '../../providers/service/stepperService';

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

export class OpenchatPageComponent {
  @ViewChild('content') content: Content;
  name: string;
  sede: string;
  surname: string;
  chatOpen: boolean;
  email: string; //email ricevente
  idChat: string;
  text : FormControl;
  messages: Array<any>
  type: string;
  newMessage: Array<any>;
  
  uploadPercent: Observable<number>; // percentuale del file in caricamento
  currentPercentage :Subscription;
  toast :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProv: MessageProvider, public viewCtrl: ViewController, public toastCtrl: ToastController) {
    //this.nome = localStorage.getItem("nome");
    //this.sede = localStorage.getItem("sede");
    //navParams per prendere parametri da NON localStorage
    
    navCtrl.remove(0);

    this.text = new FormControl('', Validators.required)
    this.sede = navParams.get("sede");
    this.surname = navParams.get("surname");
    this.name = navParams.get("name");
    this.email = navParams.get("receveir");
    this.type = navParams.get("type");
    this.chatOpen = true;

    if (this.type == "tutor")
      this.idChat = firebase.auth().currentUser.email + this.email
    else
      this.idChat = this.email + firebase.auth().currentUser.email
    
    console.log("idChat:", this.idChat)

    //messages esterno che contiene le chat
   // console.log("Mex:", serviceProv.getAllMessages("Messages", this.idChat))

   this.messages = new Array();

    serviceProv.getAllMessages("Messages", this.idChat).then((result) => {
        this.messages = [];
        result.forEach(el => {
          this.messages.push(el)
        });
      });
      console.log("Messages:", this.messages)
  }

  sendUserMessage(){

    let message = {
      message: this.text.value,
      sender: firebase.auth().currentUser.email,
      receiver: this.email,
      creationTime: new Date().toLocaleString()
		};

    this.serviceProv.sendMessage("Messages", this.idChat, message).then(() => {
      this.content.scrollToBottom();
    });
    this.text.setValue("");
    console.log("mariann", this.email);
  }

  /**
   * @description Permette il caricamento di un file all'interno della chat
   * @author Giosuè Sulipano
   */
  sendUserFile(file) {
    let path = this.idChat + "_" + new Date().toLocaleString();
    this.serviceProv.uploadFile(file, path, this.uploadPercent);
    console.log("File upload task sent to (MessagingService)uploadFile!")
    this.presentToast();
  }

  /**
   * @description Rappresenta un toast durante il caricamento del file all'interno della chat, mostrando la percentuale di caricamento.
   * @author Giosuè Sulipano
   */
  presentToast() {
    this.toast = this.toastCtrl.create({
      message: 'Caricamento del file in corso. Percentuale: ' + this.uploadPercent,
      duration: 5000 // temporaneo
    });
    this.toast.present();
  }

  ionViewDidLoad() {
    this.chatOpen = true
    console.log('ionViewDidLoad OpenchatPage');
    let observer = this.serviceProv.getObserver(this.idChat)
    let viewMessage = this;
    observer.onSnapshot({
      next(snapshot) {
        console.log("snapshot", snapshot)
        snapshot.docChanges().forEach((value, index: number, array) => {
            viewMessage.messages.push(value.doc.data());
        })
        
      },
      error(error: Error) {
        console.log("Error to listen add", error)
      }
    })
    
  }

  showChat(){
    this.chatOpen = true;
  }

  showFiles(){
    this.chatOpen = false;
  }

  scrollDown(){
    if(this.content != undefined)
    this.content.scrollToBottom(0);
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Content, ToastController } from 'ionic-angular';
import { MessageProvider } from '../../providers/service/messagingService'
import firebase from 'firebase';
import { FormControl, Validators } from '@angular/forms';
//import { ServiceProvider } from '../../providers/service/stepperService';
declare var require: any;

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
  text: FormControl;
  messages: Array<any>;
  files: Array<any>;
  type: string;
  newMessage: Array<any>;
  moment = require('moment');
  toast: any;
  viewList = false;
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
    this.files = new Array();

    //get all messages
    serviceProv.getAllMessages("Messages", this.idChat).then((result) => {
      this.messages = [];
      result.forEach(el => {
        this.messages.push(el)
      });
    });
    console.log("Messages:", this.messages)

    //get all files
    serviceProv.getFiles("Messages", this.idChat).then((result) => {
      this.files = [];
      result.forEach(el => {
        this.files.push(el)
      });
    });

    this.viewList = true
  }



  sendUserMessage() {

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
  sendUserFile($event) {
    console.log('EVENTO: ', $event);
    console.log('FILE: ', $event.target.files[0]);
    if ($event.target.files[0].name.substring($event.target.files[0].name.length-4, $event.target.files[0].name.length) == ".pdf") {
      let timeUpload = this.moment().format("DDMMYYYY_hhmmA");
      let path = this.idChat + "/" + timeUpload;
      console.log("File upload task sent to (MessagingService)uploadFile!");
      this.presentToast("loading");
      this.serviceProv.uploadFile($event, path).then(
        (url) => {
          this.toast.dismiss();
          console.log("File uploaded!");
          //qui si potrebbe inviare una notifica sotto forma di messaggio da far visualizzare ad entrambi
          let fileInfo = {
            author: firebase.auth().currentUser.email,
            name: $event.target.files[0].name,
            uploadDate: this.moment().format("DD-MM-YYYY, HH:mm:ss"),
            urlFile: url,
          }
          this.serviceProv.saveFileInfo(this.idChat, fileInfo);
          this.presentToast("success");
        },
        () => {
          console.log("File not uploaded!");
          this.toast.dismiss();
          this.presentToast("error");
        }).catch((error) => {
          console.log(error);
          this.toast.dismiss();
          this.presentToast("error");
        }
      );
    } else {
      this.presentToast("extension");
    }
  }

  /**
   * @description Rappresenta un toast durante il caricamento del file all'interno della chat, mostrando la percentuale di caricamento.
   * @author Giosuè Sulipano
   */
  presentToast(type: String) {
    switch (type) {
      case 'loading':
        this.toast = this.toastCtrl.create({
          message: 'Caricamento del file in corso..'
        });
        this.toast.present();
        break;
      case 'error':
        this.toast = this.toastCtrl.create({
          message: 'Caricamento del file fallito!',
          duration: 2000
        });
        this.toast.present();
        break;
      case 'success':
        this.toast = this.toastCtrl.create({
          message: 'Il file è stato caricato con successo!',
          duration: 2000
        });
        this.toast.present();
        break;
      case 'extension':
        this.toast = this.toastCtrl.create({
          message: 'Formato errato! Ricordati che puoi caricare solo file .pdf!',
          duration: 2000
        });
        this.toast.present();
        break;
    }
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
          if (viewMessage.viewList)
            viewMessage.messages.push(value.doc.data());
        })

      },
      error(error: Error) {
        console.log("Error to listen add", error)
      }
    })

    let observerFiles = this.serviceProv.getFileObserver(this.idChat)
    observerFiles.onSnapshot({
      next(snapshot) {
        console.log("snapshot", snapshot)
        snapshot.docChanges().forEach((value, index: number, array) => {
          if (viewMessage.viewList)
            viewMessage.files.push(value.doc.data());
        })
      },
      error(error: Error) {
        console.log("Error to listen add", error)
      }
    })
  }

  showChat() {
    this.chatOpen = true;
  }

  showFiles() {
    this.chatOpen = false;
  }

  scrollDown() {
    if (this.content != undefined)
      this.content.scrollToBottom(0);
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
}

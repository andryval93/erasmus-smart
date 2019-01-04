import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.nome = localStorage.getItem("nome");
    //this.sede = localStorage.getItem("sede");
    //navParams per prendere parametri da NON localStorage
    
    this.sede = navParams.get("sede");
    this.surname = navParams.get("surname");
    this.name = navParams.get("name");
    this.email = navParams.get("receveir");
    this.chatOpen = true;
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

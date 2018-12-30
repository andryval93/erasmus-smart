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
  nome: string;
  sede: string;
  surname: string;
  chatOpen: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.nome = localStorage.getItem("nome");
    //this.sede = localStorage.getItem("sede");
    //navParams per prendere parametri da NON localStorage
    this.nome = navParams.get("nome");
    this.sede = navParams.get("sede");
    this.surname = navParams.get("surname");
    this.chatOpen = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenchatPage');
  }

  hideFiles(){
    this.chatOpen = true;
  }

  hideChat(){
    this.chatOpen = false;
  }
}

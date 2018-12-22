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
  nome: any;
  sede: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.nome = localStorage.getItem("nome");
    //this.sede = localStorage.getItem("sede");
    //navParams per prendere parametri da NON localStorage
    this.nome = navParams.get("nome");
    this.sede = navParams.get("sede");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenchatPage');
  }

}

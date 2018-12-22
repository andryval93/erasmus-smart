import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpenchatPage } from '../openchat/openchat';
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

  items: Array<{nome: string, sede: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    //caricamento della lista dal db 
    this.items.push({
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
    });
  }

  public isSearchbarOpened = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiChatPage');
  }
  
  openChat(nome, sede){
   // localStorage.setItem("nome", nome);
   // localStorage.setItem("sede", sede);
    this.navCtrl.push(OpenchatPage, {"nome":nome, "sede":sede});
  }
}


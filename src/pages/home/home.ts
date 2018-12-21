import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../providers/service/loginService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title:string = "Home";
  auth : boolean;
  service : LoginService;
  constructor(public navCtrl: NavController) {
    this.auth=false;
  // this.auth = LoginService.getauthenticated();
  }

}

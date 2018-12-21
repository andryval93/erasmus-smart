import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginService } from '../../providers/service/loginService';
import { RegistrazionePage } from '../registrazione/registrazione';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;
  currentEmail : any;
	constructor(
		private navCtrl: NavController,
		private auth: LoginService,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

  login() {
		let data = this.loginForm.value;
     
		if (!data.email) {
			
			return;
		}
		this.currentEmail = data.email;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
    }

  signup(){
    this.navCtrl.push(RegistrazionePage);
  }



}
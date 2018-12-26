import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import {QeaServiceProvider} from '../../providers/service/qeaService'
import { HomePage } from '../home/home';


@IonicPage()

@Component({
	selector: 'page-registrazione',
	templateUrl: './registrazione.html'
})
export class RegistrazionePage {
	signupError: string;
	form: FormGroup;
	public gender: any; 

	constructor(
		private navCtrl: NavController,
   		private serviceProv: QeaServiceProvider,
		fb: FormBuilder		
	) {
		this.form = fb.group({
		//	email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
			email: ['', Validators.required],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9]+$')])],
			name: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$')])],
			surname: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$')])],
			birthDay: ['', Validators.required],
			birthPlace: ['',  Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$')])],
			fiscalCode: ['', Validators.required],
			gender: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		});
  }

  signup() {

		let data = this.form.value;
		if(data.password != data.confirmPassword){
			console.log("PASS DIVERSE!!!")
			return;
		}
		if(!this.form.valid){
			console.log("FORM INVALIDO!!!" + this.form.valid)
			return;
		}
		else
			console.log("FORM VALIDO!!!!!" + this.form.valid)
		let credentials = {
			email: data.email,
			password: data.password,
			name: data.name,
			surname: data.surname,
			birthDay: data.birthDay,
			birthPlace: data.birthPlace,
			fiscalCode: data.fiscalCode,
			gender: data.gender
		};		

		console.log("Gender: " + this.gender)
	/*	this.serviceProv.addDocument("Account", credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message 
		);*/
  }
}
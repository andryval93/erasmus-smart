import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { RegistrationProvider } from '../../providers/service/registrationService'
import { HomePage } from '../home/home';
//import CodiceFiscale from 'codice-fiscale-js'


@IonicPage()

@Component({
	selector: 'page-registrazione',
	templateUrl: './registrazione.html'
})
export class RegistrazionePage {
	
	signupError: string;
	form: FormGroup;
	public gender: any;
	data: any;
	cf: any;
	errorMessageCF: string;
	errorMessagePassword: string;

	constructor(
		private navCtrl: NavController,
		private serviceProv: RegistrationProvider,
		fb: FormBuilder
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9]+$')])],
			name: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$')])],
			surname: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$')])],
			birthDay: ['', Validators.required],
			birthPlace: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.pattern('^[a-zA-Z]+$')])],
			fiscalCode: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.pattern('^[a-zA-Z0-9]+$')])],
			gender: ['M', Validators.required],
			userType: ['student', Validators.required],
			confirmPassword: ['', Validators.required],
			privacyCheck: ['false', Validators.requiredTrue]
		});
	}

	signup() {

		this.data = this.form.value;
		let splittedBirth = this.data.birthDay.split("-");

		if (this.form.status == "INVALID") {
			this.markFormGroupTouched(this.form);
			let error = this.form.getError;
			//console.log(this.form.status + ", " + this.form.)
			return;
		}

		/* TESTATO e FUNZIONANTE CON BGLLDA80B11H703B ovvero Aldo Baglio M 11/02/1980 Salerno */
		this.cf = new CodiceFiscale({
			name: this.data.name,
			surname: this.data.surname,
			gender: this.data.gender,
			day: splittedBirth[2],
			month: splittedBirth[1],
			year: splittedBirth[0],
			birthplace: this.data.birthPlace
		});

		if (!(this.data.fiscalCode.substring(0,15) == this.cf.code.substring(0,15))) {
			console.log("CF INVALIDO!!!")
			this.errorMessageCF = "Codice Fiscale non valido"
			return;
		}
		else
			console.log("CF VALIDO !!!") 

		if (this.data.password != this.data.confirmPassword) {
			console.log("PASS DIVERSE!!!");
			this.errorMessagePassword = "Password diverse, inserire la stessa password"
			return;
		}

		let credentials = {
			email: this.data.email,
			password: this.data.password,
			name: this.data.name,
			surname: this.data.surname,
			birthDay: this.data.birthDay,
			birthPlace: this.data.birthPlace,
			fiscalCode: this.data.fiscalCode,
			gender: this.data.gender,
			userType: this.data.userType
		};

		this.serviceProv.addDocument("Account", this.data.email, credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
		);

	}

	private markFormGroupTouched(formGroup: FormGroup) {
		(<any>Object).values(formGroup.controls).forEach(control => {
			control.markAsTouched();

			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}
}

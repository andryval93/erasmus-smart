import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { RegistrationProvider } from '../../providers/service/registrationService'
import { HomePage } from '../home/home';
import CodiceFiscale from 'codice-fiscale-js'
import { COMUNI } from 'codice-fiscale-js/src/geo-data.js'

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
	errorMessageBirthPlace: string;
	errorMessageBirthDay: string;

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

		//Verifica che l'utente sia maggiorenne o che abbia al più 100 anni
		this.verifyBirthDay(splittedBirth[0])

		//Verifica che la città inserita sia corretta
		this.verifyBirthPlace(this.data.birthPlace)		

		//Verifica i validators  
		if (this.form.status == "INVALID") {
			this.markFormGroupTouched(this.form);
			console.log("Form Invalido:", this.form)
			return;
		}

		//Calcola il codice fiscale con i dati inseriti
		/* TESTATO e FUNZIONANTE CON BGLLDA80B11H703B ovvero Aldo Baglio M 11/02/1980 Salerno
			e PLACCC98B22F839E Cicco Paolo M 22/02/1998 Napoli  */
		this.cf = new CodiceFiscale({
			name: this.data.name,
			surname: this.data.surname,
			gender: this.data.gender,
			day: splittedBirth[2],
			month: splittedBirth[1],
			year: splittedBirth[0],
			birthplace: this.data.birthPlace
		});


		//Verifica che il codice fiscale inserito è uguale a quello generato
		if (!(this.data.fiscalCode.substring(0, 15) == this.cf.code.substring(0, 15))) {
			console.log("CF INVALIDO!!!")
			this.errorMessageCF = "Codice Fiscale non valido"
			return;
		}
		else
			console.log("CF VALIDO !!!")
		this.errorMessageCF = undefined

		//Verifica che le due password inserite sono uguali
		if (this.data.password != this.data.confirmPassword) {
			console.log("PASS DIVERSE!!!");
			this.errorMessagePassword = "Password diverse, inserire la stessa password"
			return;
		}
		else
			this.errorMessagePassword = undefined

		//Crea l'account da salvare nel DB
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

		//Salva l'account nel DB nella collection Account con ID l'email inserita
		this.serviceProv.addDocument("Account", this.data.email, credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
		);

	}

	//Imposta tutti i form "touched" per la visualizzazione degli errori se l'utente non ha cliccato su uno dei form
	private markFormGroupTouched(formGroup: FormGroup) {
		(<any>Object).values(formGroup.controls).forEach(control => {
			control.markAsTouched();

			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}

	private verifyBirthPlace(cc) {
		let result;
		for (const item of COMUNI) {
			if (item[2] === cc.toUpperCase()) {
				result = item;
				break;
			}
		}
		if (result === undefined) {
			this.errorMessageBirthPlace = "Comune non trovato, inserire un comune valido"
			return
		}
		else
			this.errorMessageBirthPlace = undefined
	}

	private verifyBirthDay(bb) {
		
		let today = new Date();
		let thisYear = today.getFullYear();

		if (!(bb <= thisYear-18 && bb >= thisYear-50)) {
			this.errorMessageBirthDay = "Inserire un anno compreso tra " + (thisYear-18) + " e " + (thisYear-50)
			return
		}
		else
			this.errorMessageBirthDay = undefined
	}
}

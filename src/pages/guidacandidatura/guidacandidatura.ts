import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StepperPageComponent } from '../stepper/stepper';
/**
 * Generated class for the GuidacandidaturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guidacandidatura',
  templateUrl: 'guidacandidatura.html',
})
export class GuidaCandidaturaPageComponent {
  slides = [
    {
      title: " ",
      description: "Premere il pulsante 'Modello presentazione domanda' per potere iniziare a compilare la domanda di partecipazione",
      image: "assets/CandidaturaImgs/Candidatura1.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura2.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura2-2.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura3.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura4.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura5.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura6.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura7.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura8.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura9.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura10.png",
    },
    {
      title: " ",
      description: "",
      image: "assets/CandidaturaImgs/Candidatura11.png",
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToStepperPage() {
    this.navCtrl.setRoot(StepperPageComponent);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidacolloquioPage');
  }

}

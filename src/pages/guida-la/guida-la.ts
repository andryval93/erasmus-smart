import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StepperPageComponent } from '../stepper/stepper';

/**
 * Generated class for the GuidacolloquioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guida-LA',
  templateUrl: 'guida-LA.html',
})
export class GuidaLAPageComponent {
  slides = [
    {
      title: " LEARNING AGREEMENT FOR STUDY ",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura12.png",
    },
    {
      title: "",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura1.png",
    },
    {
      title: "",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura2.png",
    },
    {
      title: "",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura3.png",
    },
    {
      title: "",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura4.png",
    },
    {
      title: " III. COMMITMENT OF THE THREE PARTIES ",
      description: " By signing this document, the student, the sending institution and the receiving institution confirm that they approve the proposed Learning Agreement and that they will comply with all the arrangements agreed by all parties. Sending and receiving institutions undertake to apply all the principles of the Erasmus Charter for Higher Education relating to mobility for studies (or the principles agreed in the inter-institutional agreement for institutions located in partner countries). " +
        "The receiving institution confirms that the educational components listed in Table A are in line with its course catalogue, " +
        "The sending institution commits to recognise all the credits gained at the receiving institution for the successfully completed educational components and to count them towards the student's degree as described in Table B. Any exceptions to this rule are documented in an annex of this Learning Agreement and agreed by all parties." +
        "The student and receiving institution will communicate to the sending institution any problems or changes regarding the proposed mobility programme, responsible persons and/or study period. "
      ,
      image: "assets/LearningAgreementImgs/Candidatura5.png",
    }, {
      title: "",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura6.png",
    }, {
      title: "CHANGES TO THE LEARNING AGREEMENT " +
        " (Section to be completed DURING THE MOBILITY) " +
        " RECEIVING INSTITUTION "
      ,
      description: "EXCEPTIONAL CHANGES TO THE PROPOSED MOBILITY PROGRAMME ",
      image: "assets/LearningAgreementImgs/Candidatura7.png",
    }, {
      title: " SENDING INSTITUTION ",
      description: " EXCEPTIONAL CHANGES TO THE PROPOSED MOBILITY PROGRAMME ",
      image: "assets/LearningAgreementImgs/Candidatura8.png",

    }, {
      title: "",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura9.png",
    }, {
      title: "",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura10.png",
    }, {
      title: "",
      description: "",
      image: "assets/LearningAgreementImgs/Candidatura11.png",
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

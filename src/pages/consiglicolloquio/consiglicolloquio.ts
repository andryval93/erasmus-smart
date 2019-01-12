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
  selector: 'page-consiglicolloquio',
  templateUrl: 'consiglicolloquio.html',
})
export class ConsiglicolloquioPageComponent {
  slides = [
    {
      title: " Introduzione",
      description: "Il programma Erasmus favorisce la mobilità internazionale degli studenti e contribuisce a finanziare esperienze di studio all'estero. Le convenzioni di cooperazione con altre università europee nell'ambito del programma Erasmus consentono agli studenti regolarmente iscritti di studiare presso un?altra università europea. In questo modo lo studente conosce una nuova cultura e si appresta a vivere un diverso studio universitario. Nella maggior parte delle università è previsto un colloquio tra lo studente candidato ed una commissione. Leggendo questo tutorial si possono avere alcuni consigli su come fare la Domanda Erasmus e come affrontare il colloquio.",
      image: "",
    },
    {
      title: " Motivazione della domanda ",
      description: "Siccome sono molti gli universitari che fanno domanda per questo progetto gli atenei utilizzano il colloquio per stilare una graduatoria. Il fine principale è quello di conoscere la motivazione che ha spinto il soggetto a candidarsi. Gli argomenti su cui il candidato deve discutere sono di carattere generale, ad esempio gli studi che porta avanti, la conoscenza di altre lingue ed i motivi che spingono il candidato a scegliere una città estera piuttosto che un'altra.",
      image: "",
    },
    {
      title: " Come affrontare l'ansia del colloquio ",
      description: " A queste domande ognuno sa dare delle risposte senza incontrare difficoltà in quanto sono inerenti la propria persona. L'ansia di essere davanti ad una commissione che ha l'obiettivo di selezionare può creare qualche problema. È opportuno quindi affrontare il colloquio con un atteggiamento del tutto rilassato e con motivazioni valide. È consigliabile prepararsi un abbozzo del piano di studi che si vuole affrontare nell'università che è stata scelta.",
      image: "",
    },
    {
      title: " Motivazione dell'esperienza che si vuole fare ",
      description: "Per affrontare il colloquio è necessario stare calmi e rispondere con serenità alle domande dei commissari. Non bisogna mai esitare sui motivi che spingono a fare questa esperienza. Non è consigliabile dare motivazioni banali; è opportuno argomentare e dare motivazioni plausibili e serie. Se si è convinti di quello che si dice e del perché si vuole partecipare a questo progetto piuttosto che ad un altro si riesce sicuramente a convincere la commissione. Se poi si conosce bene anche la lingua si parte avvantaggiati.",
      image: "",
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

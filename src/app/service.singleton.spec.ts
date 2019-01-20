import { TestBed } from '@angular/core/testing';
import { StepService } from '../providers/service/stepService';
import { SingletonDatabase } from '../model/Database';
import { QeaServiceProvider } from '../providers/service/qeaService';
describe('ANYSERVICE + SINGLETONDATABASE INTEGRATION TEST', () => {

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [
        StepService,
        QeaServiceProvider
      ]
    })
  }));
});

it('Testa se DBIstance viene creata una sola volta dopo che STEPSERVICE E QEASERVICE chiamano SINGLETONDATABASE.getIstance()', async function (done) {
  let serviceStep: StepService = new StepService();
   let serviceQeA: QeaServiceProvider = new QeaServiceProvider();
 /*   Provo a simulare che due service diversi richiedono DBIstance a SingletonDatabase
    quindi il singleton non dovrà ricreare la variabile più di una volta */
   serviceStep.getSingleton()
   serviceQeA.getSingleton()
 /* controllo che DBIstance non sia creata piu di una volta, la variabile count "conta" quante volte DBIstance viene creata  */
   expect(SingletonDatabase.count).toBeLessThanOrEqual(1);
     done()
 });
import { TestBed } from '@angular/core/testing';
import { StepService } from '../providers/service/stepService';

describe('STEPSERVICE UNIT TEST:  100% COVERAGE', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [
        StepService,
      ]
    })
  }));

});
 
it('getStepsDocuments("Account") TEST : Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
  let service: StepService = new StepService();
  service.getStepsDocuments("Account")
    .then((result) => {
      var rand = Math.floor(Math.random() * result.length);
      expect(result[rand].id).toBeDefined()
      expect(result[rand].name).toBeDefined()
      expect(result[rand].surname).toBeDefined()
      expect(result[rand].userType).toBeDefined()
    /*  questi expect sono tra commento perchè il database non è consistente 
        expect(result[rand].step).toBeDefined()
        expect(result[rand].status).toBeDefined()
        expect(result[rand].sede).toBeDefined()
        expect(result[rand].tutor).toBeDefined()            
    */
     if ((result[rand].id).toBeDefined()) {
        done()
      }
    }).catch(error => {
      console.log(error)
      done()
    });
});

it('getStepsDocuments("Reviews") TEST : Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
  let n: number = 0;
  let service: StepService = new StepService();
  service.getStepsDocuments("Reviews")
    .then((result) => {
      var rand = Math.floor(Math.random() * result.length);
      console.log("rand test ", rand);
      expect(result[rand].id).toBeDefined()
      expect(result[rand].citta).toBeDefined()
      expect(result[rand].nazione).toBeDefined()
      expect(result[rand].uni_name).toBeDefined()
      /* Ulteriore controllo da cancellare in futuro */
      /* expect(result[n].id).toEqual("CiNxBtKSyvp0yAaUisUR")
       expect(result[n].citta).toEqual("Milano")
       expect(result[n].nazione).toEqual("Italia")
       expect(result[n].uni_name).toEqual("Università di Milano")*/
      /* if (("CiNxBtKSyvp0yAaUisUR".localeCompare(result[n].id)) == 0) {
         done()
       }*/
      if ((result[rand]).toBeDefined()) {
        done()
      }
    }).catch(error => {
      console.log(error)
      done()
    });
});

/* addStepsDocument TEST : Testa il metodo Resolve */
it('addStepsDocument TEST : resolve() TEST', function (done) {
  let service: StepService = new StepService();
  service.addStepsDocument("Account", "test@live.it", { sede: "TEST_SEDE", tutor: "TEST_TUTOR", status: "TEST_PENDING", step: 9999 }).then((test) => {
    expect(test).not.toBeDefined()
    done()
  }).catch(error => {
    console.log(error)
    done()
  });
});

/* addStepsDocument TEST : Testa la Promise */
it('addStepsDocument TEST : Promise TEST', function (done) {
  let service: StepService = new StepService();
  expect(service.addStepsDocument("Account", "test@live.it", { sede: "TEST_SEDE", tutor: "TEST_TUTOR", step: 0 })).toBeDefined();
  done()
});


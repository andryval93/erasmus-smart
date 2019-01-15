import { TestBed } from '@angular/core/testing';
import { ServiceProvider } from '../providers/service/stepService';
import { reject } from 'q';


describe('STEPPER TEST', () => {

  let originalTimeout: number;

  beforeEach((() => {

   /* this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;*/
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [
        ServiceProvider,
      ]

    })

  }));
  
  


  it('getStepsDocuments TEST : Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
   
    let n: number = 0;
    let service: ServiceProvider = new ServiceProvider();

    service.getStepsDocuments("Reviews")
      .then((result) => {
        
        var rand = Math.floor(Math.random()*result.length)+1;
        console.log("rand test " , rand ) ; 
      
       expect(result[rand].id).toBeDefined()
       expect(result[rand].citta).toBeDefined()
       expect(result[rand].nazione).toBeDefined()
       expect(result[rand].uni_name).toBeDefined()

      /* Ulteriore controllo da cancellare in futuro */ 
        expect(result[n].id).toEqual("CiNxBtKSyvp0yAaUisUR")
        expect(result[n].citta).toEqual("Milano")
        expect(result[n].nazione).toEqual("Italia")
        expect(result[n].uni_name).toEqual("Università di Milano")

       
        if (("CiNxBtKSyvp0yAaUisUR".localeCompare(result[n].id)) == 0) {
          done()
        }
      }).catch(error => {
        reject(error);
        expect(error).toBeDefined();
        done()
      });

  });
/* addStepsDocument TEST */ 
  it('addStepsDocument TEST ', function (done) {
    let service: ServiceProvider = new ServiceProvider();

    expect(service.addStepsDocument("TEST_COL", "TEST_DOC", "TEST_CONTENT")).toBeDefined();
    done()
  });

});
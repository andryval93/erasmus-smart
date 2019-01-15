import { reviewService } from '../providers/service/reviewsService';
import { TestBed} from '@angular/core/testing';
import { reject } from 'q';

  describe('REVIEW TEST', () => {

    let originalTimeout: number;
  
    beforeEach((() => {
  
     /* this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;*/
      TestBed.configureTestingModule({
        declarations: [],
        imports: [
        ],
        providers: [
          reviewService,
        ]
  
      })
  
    }));
  

  it('getReviewDocuments TEST : Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
   
    let n: number = 0;
    let service: reviewService = new reviewService();

    service.getUniversities("Sedi")
      .then((result) => {
        
        var rand = Math.floor(Math.random()*result.length)+1;
        console.log("rand test " , rand ) ; 
      
       expect(result[rand].id).toBeDefined()
       expect(result[rand].citta).toBeDefined()
       expect(result[rand].nazione).toBeDefined()
       expect(result[rand].nome).toBeDefined()

      /* Ulteriore controllo da cancellare in futuro */
        expect(result[n].id).toEqual("u7TJSKbhV95vAbMjQWmC")
        expect(result[n].citta).toEqual("waglioming")
        expect(result[n].nazione).toEqual("austroungarica")
        expect(result[n].nome).toEqual("Martin e cristiano")

       
        if (("u7TJSKbhV95vAbMjQWmC".localeCompare(result[n].id)) == 0) {
          done()
        }
      }).catch(error => {
        reject(error);
        expect(error).toBeDefined();
        done()
      });

  });



  it('getReviews TEST : Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
   
    let n: number = 0;
    let service: reviewService = new reviewService();

    service.getReviews("Reviews")
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
});
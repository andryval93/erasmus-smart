import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';
import { QeaServiceProvider } from '../providers/service/qeaService';




describe('Service: QeaService', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [

      ],
      imports: [
        AngularFireModule.initializeApp(ENV.firebase),     
      ],
      providers: [
        QeaServiceProvider,
        AngularFireAuth
      ]
    });
  
  }));

  it('Confronta il primo della tabella con id specifico', function (done) {
    let service :QeaServiceProvider =  new QeaServiceProvider();
    service.getAnswers("Q&A").then((result) => {
      console.log(result[0].id + " --- result[0].id")
      expect(result[0].id).toEqual("0PsKdTazywmJDavPMaCE")
      done()
    });
  });



/*
  it('should call fetchData from apiService', function (done) {
    let service :QeaServiceProvider =  new QeaServiceProvider();

    spyOn(service, 'getAnswers').and.returnValue(Promise.resolve([{
        content: "News inserita dall'admin",
        date: new Date(),
        id: "NEWS dell'admin 18:07 :)",
        title: "NEWS dell'admin 18:07 :)"
    }]));

    service.getAnswers('News').then((data) => {
        console.log("News data",data)
        expect(data[0].title).toEqual("NEWS dell'admin 18:07 :)")
        done();
    })
});


*/
/*

  it('verifica se il metodo getQuestions() ha l output desiderato', inject([QeaServiceProvider], (service: QeaServiceProvider) => { 
    expect(service).toBeTruthy();
 }));
  
  it('verifica se il metodo getQuestions() ha l output desiderato', inject([QeaServiceProvider], (service: QeaServiceProvider) => {
    console.log(service.getQuestions("Reviews"));
    service.getSingleton();
    var test : any = service.getQuestions("Domanda").then((data) => {
       test = data;
    })
    .catch();
    expect(test).toBeDefined();
 }));

 it('verifica se il metodo insertQuestion() ha l output desiderato', inject([QeaServiceProvider], (service: QeaServiceProvider) => {
  console.log(service.insertQuestion("", "", ""));
  service.getSingleton();
  var test : any = service.insertQuestion("", "", "").then((data) => {
     test = data;
  })
  .catch();
  expect(test).toBeDefined();
}));


 it('verifica se il metodo getAnswers() ha l output desiderato', inject([QeaServiceProvider], (service: QeaServiceProvider) => {
  console.log(service.getAnswers("Reviews"));
  service.getSingleton();
  var test : any = service.getAnswers("Risposta").then((data) => {
     test = data;
  })
  .catch();
  expect(test).toBeDefined();
}));
*/

 /* it("The 'toBeDefined' matcher compares against `undefined`", function() {
  
        let qeaservice: QeaServiceProvider;
        qeaservice.getQuestions(this._COLL)
         .then((data) => {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            this.locations = data;
         })
         .catch();
        
    expect(this.locations).toBeDefined();
   
   // expect(a.foo).not.toBeDefined();
  });

*/

 /* it('Domande', inject([QeaServiceProvider], (qeaservice: QeaServiceProvider) => {

    qeaservice.getQuestions('Domande').then((data) => {
        expect(data.id).not.toBeDefined();
        
    })  
  }));


  
  it('should be equal "tutor" AccountService', inject([AccountService], (service: AccountService) => {
    let account:any
    service.getTypeAccount('Account', 'tienivince@live.it').then((data) => {
      account = data.data();
      expect(account).toEqual("tutor")
    })  
  }));

*/
}); 
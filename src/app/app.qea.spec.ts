import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';
import { QeaServiceProvider } from '../providers/service/qeaService';



describe('Service: QeaService', () => {
  
  beforeEach(async(() => {
    let prova : QeaServiceProvider;
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AngularFireModule.initializeApp(ENV.firebase), 
      
      ],
      providers: [
        QeaServiceProvider,
        AngularFireAuth
      ]
    })
    
    prova = TestBed.get(QeaServiceProvider);
  }));
  
  it("The 'toBe' matcher compares with ===", function() {
    
    this.prova.getQuestions(this._COLL).then((data) => {
      // IF we don't have any documents then the collection doesn't exist
      // so we create it!
      this.locations = data;
   })
   .catch();
   console.log(this.locations);
   expect(this.locations).toBeDefined();
  });

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
import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';
import { AccountService } from '../providers/service/accountService'



describe('Service: AccountService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AngularFireModule.initializeApp(ENV.firebase)
      
      ],
      providers: [
        AccountService,
        AngularFireAuth
      ]
    })
  }));
  

  it('should be equal to "tienivince@live.it" AccountService', inject([AccountService], (service: AccountService) => {
    let account:any
    service.getAccount('Account', 'tienivince@live.it').then((data) => {
      account = data.data().email;
      expect(account).toEqual("tienivince@live.it")
    })  
  }));

  it('should be equal "tutor" AccountService', inject([AccountService], (service: AccountService) => {
    let account:any
    service.getTypeAccount('Account', 'tienivince@live.it').then((data) => {
      account = data.data();
      expect(account).toEqual("tutor")
    })  
  }));




});
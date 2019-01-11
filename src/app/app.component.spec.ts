import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';
import { AccountService } from '../providers/service/accountService'
import { SystemJsNgModuleLoader } from '@angular/core';



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
  
/*  it('should not be Undefined MessagingService', inject([AccountService], (service: AccountService) => {
    //expect(service.authenticated).toBeTruthy();
    expect(service.getAccount('Account', 'tienivince@live.it')).not.toBeUndefined;
  }));*/

  it('should be Undefined MessagingService', inject([AccountService], (service: AccountService) => {
    //expect(service.authenticated).toBeTruthy();
    let account:any
    service.getAccount('Account', 'tienivince@live.it').then((data) => {
      account = data.data().email;
      expect(account).toEqual("tienivince@live.it")
    })
  
  }));
});
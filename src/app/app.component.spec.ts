import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';
import { AccountService } from '../providers/service/accountService'

let accountTutor = {
  email: 'test@live.it',
  password: 'test1234',
  name: 'test',
  surname: 'test',
  birthDay: "1997-11-20",
  birthPlace: "Salerno",
  fiscalCode: "0000000000000000",
  gender: "M",
  userType: "tutor",
};

let accountStudent = {
  email: 'test2@live.it',
  password: 'test1234',
  name: 'test',
  surname: 'test',
  birthDay: "1997-11-20",
  birthPlace: "Salerno",
  fiscalCode: "0000000000000000",
  gender: "M",
  userType: "student",
};

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

  it('should be equal to "tutor" AccountService', inject([AccountService], (service: AccountService) => {
    let userType:any
    service.getTypeAccount('Account', 'tienivince@live.it').then((data) => {
      userType = data.data();
      expect(userType).toEqual("tutor")
    })  
  }));

  it('should be equal to "account" AccountService', inject([AccountService], (service: AccountService) => {
    
    service.registration('Account', accountTutor.email, accountTutor).then(() => {
        service.getAccount('Account', accountTutor.email).then((data) => {
          service.deleteDocument('Account', accountTutor.email)
          expect(data.data()).toEqual(accountTutor)
        });
    })
  }));


  it('should be equal to "accepted" AccountService', inject([AccountService], (service: AccountService) => {
    let status:any
    service.getStudentStatus('Account', 'ruggero_93@live.it').then((data) => {
      status = data.data();
    })  
  }));

  it('should be set to "accepted" AccountService', inject([AccountService], (service: AccountService) => {
    
    service.registration('Account', accountStudent.email, accountStudent)
    service.acceptRequest(accountStudent.email, accountTutor.email).then((data) => {
      expect(data.data().status).toEqual("accepted")
    });
    service.deleteDocument('Account', accountStudent.email)

  }));

  it('should be denied AccountService', inject([AccountService], (service: AccountService) => {
    //DA FARE
  }));

  it('should be signed in AccountService', inject([AccountService], (service: AccountService) => {
    
    let credentials = {
			email: accountStudent.email,
			password: accountStudent.password
		};

    service.signInWithEmail(credentials).then((data) => {
      expect(data.user).not.toBeNull
    })
  }));


});
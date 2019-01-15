import { TestBed } from '@angular/core/testing';
import { AccountService } from '../providers/service/accountService';
import { reject } from 'q'
import { AngularFireAuth } from 'angularfire2/auth';


describe('ACCOUNT TEST', () => {

  let account = {
    email: 'test@live.it',
    password: 'test1234',
    name: 'test',
    surname: 'test',
    birthDay: "1997-11-20",
    birthPlace: "test",
    fiscalCode: "0000000000000000",
    gender: "M",
    userType: "tutor",
    students: ["test2@live.it"]
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

  let afAuth: AngularFireAuth

  

  beforeEach((() => {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [
        AccountService,
        AngularFireAuth
      ]

    })

  }));

  it('registration TEST ', function (done) {
    let service: AccountService = new AccountService(afAuth);

    expect(service.registration('Account', account.email, account)).toBeDefined();
    done()

  /*  expect(service.registration('Account', accountStudent.email, accountStudent)).toBeDefined();
    done()*/
  });

 /* it('getAccount TEST : Prende un account e controlla se è consistente', function (done) {

    let service: AccountService = new AccountService();
  
    service.getAccount('Account', account.email).then((result) => {
      expect(result.email).toBeDefined()
      expect(result.password).toBeDefined()
      expect(result.name).toBeDefined()
      expect(result.surname).toBeDefined()
      expect(result.birthDay).toBeDefined()
      expect(result.birthPlace).toBeDefined()
      expect(result.fiscalCode).toBeDefined()
      expect(result.gender).toBeDefined()
      expect(result.userType).toBeDefined()
      expect(result.students).toBeDefined()
  
      if ((this.account.email.localeCompare(result.email)) == 0) {
        done()
      }
    }).catch(error => {
      reject(error);
      expect(error).toBeDefined();
      done()
    });
  });

  it('getTypeAccount TEST : Prende il tipo di un account e controlla se è consistente', function (done) {

    let service: AccountService = new AccountService();
  
      service.getTypeAccount('Account', this.account.email).then((result) => {
      expect(result).toBeDefined()
  
      if ((this.account.userType.localeCompare(result)) == 0) {
        done()
      }
    }).catch(error => {
      reject(error);
      expect(error).toBeDefined();
      done()
    });
  });

    /* acceptRequest TEST */
    it('acceptRequest TEST ', function (done) {
      let service: AccountService = new AccountService(afAuth);
  
      expect(service.acceptRequest(accountStudent.email, account.email)).toBeDefined();
      done()
    });

      /* denyRequest TEST */
  it('denyRequest TEST ', function (done) {
    let service: AccountService = new AccountService(afAuth);

    expect(service.denyRequest(account.email, account.students)).toBeDefined();
    done()
  });

       /* denyRequest TEST */
       it('denyRequest TEST ', function (done) {
        let service: AccountService = new AccountService(afAuth);
    
        expect(service.denyRequest(account.email, account.students)).toBeDefined();
        done()
      });
  
});




/*import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';
import { AccountService } from '../providers/service/accountService'

let account = {
  email: 'test@live.it',
  password: 'test1234',
  name: 'test',
  surname: 'test',
  birthDay: "1997-11-20",
  birthPlace: "test",
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


});*/
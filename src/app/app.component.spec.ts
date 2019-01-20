import { TestBed, inject } from '@angular/core/testing';
import { AccountService } from '../providers/service/accountService';
import { reject } from 'q'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';


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
        AngularFireModule.initializeApp(ENV.firebase)
      ],
      providers: [
        AccountService,
        AngularFireAuth
      ]

    })

  }));

  /* registration TEST */
  it('registration TEST ', inject([AngularFireAuth], (af: AngularFireAuth) => {
    let service: AccountService = new AccountService(af);

    expect(service.registration('Account', account.email, account)).toBeDefined();
    expect(service.registration('Account', accountStudent.email, accountStudent)).toBeDefined();
  }));

  /* getAccount TEST */
  it('getAccount TEST : Prende un account e controlla se è consistente', inject([AngularFireAuth], (af: AngularFireAuth) => {
    let service: AccountService = new AccountService(af);

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

    }).catch(error => {
      reject(error);
      expect(error).toBeDefined();

    });
  }));

  /* getTypeAccount TEST */
  it('getTypeAccount TEST : Prende il tipo di un account e controlla se è consistente', inject([AngularFireAuth], (af: AngularFireAuth) => {
    let service: AccountService = new AccountService(af);

    service.getTypeAccount('Account', account.email).then((result) => {
      expect(result).toBeDefined()

    }).catch(error => {
      reject(error);
      expect(error).toBeDefined();

    });
  }));

  /* acceptRequest TEST */
  it('acceptRequest TEST ', inject([AngularFireAuth], (af: AngularFireAuth) => {
    let service: AccountService = new AccountService(af);

    expect(service.acceptRequest(accountStudent.email, account.email)).toBeDefined();

  }));

  /* denyRequest TEST */
  it('denyRequest TEST ', inject([AngularFireAuth], (af: AngularFireAuth) => {
    let service: AccountService = new AccountService(af);
    expect(service.denyRequest(account.email, account.students)).toBeDefined();

  }));

  /* signInWithEmail TEST */
  it('signInWithEmail TEST ', inject([AngularFireAuth], (af: AngularFireAuth) => {
    let service: AccountService = new AccountService(af);
    let credentials = {
      email: account.email,
      password: account.password
    };

    expect(service.signInWithEmail(credentials)).toBeDefined();

  }));

});
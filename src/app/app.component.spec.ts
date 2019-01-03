import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from '../providers/service/loginService';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';


describe('Service: LoginService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AngularFireModule.initializeApp(ENV.firebase)
      ],
      providers: [
        LoginService,
        AngularFireAuth
      ]
    })
  }));
  beforeEach(async () => {
    inject([LoginService],(service: LoginService) =>{
      service.signInWithEmail({
        email: "test@t.it",
        password: "12345678"
      })
    })
  });

  it('should do defined LoginService', inject([LoginService], (service: LoginService) => {
    //expect(service.authenticated).toBeTruthy();
    expect(service).toBeDefined();
  }));
});
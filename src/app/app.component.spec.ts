import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';
/*

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
  
  it('should do defined LoginService', inject([LoginService], (service: LoginService) => {
    //expect(service.authenticated).toBeTruthy();
    expect(service).toBeDefined();
  }));
});*/
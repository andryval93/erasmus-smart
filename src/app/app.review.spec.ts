import { reviewService } from './../providers/service/reviewsService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';
import { AngularFireAuth } from 'angularfire2/auth';

describe('Service: reviewService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AngularFireModule.initializeApp(ENV.firebase),
        HttpClientTestingModule
      ],
      providers: [
        AngularFireAuth,
        reviewService
      ]
    })
  }));
  
  it('should do defined reviewService', inject([reviewService], (service: reviewService) => {
    //expect(service.authenticated).toBeTruthy();
    expect(service).toBeDefined();
  }));
});
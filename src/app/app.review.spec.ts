import { reviewService } from '../providers/service/reviewsService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';

describe('Service: reviewService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
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
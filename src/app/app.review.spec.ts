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
  
  it('should be Uni', inject([reviewService], (service: reviewService) => {
    let uni:any
    service.getUniversities('Sedi.u7TJSKbhV95vAbMjQWmC').then((data) => {
      uni = data.data();
      expect(uni).toBeDefined();
    })  
  }));


  it('should be Rev', inject([reviewService], (service: reviewService) => {
    let rev:any
    service.getReviews('Sedi.u7TJSKbhV95vAbMjQWmC').then((data) => {
      rev = data.data();
      expect(rev).toBeDefined();
    })  
  }));
});
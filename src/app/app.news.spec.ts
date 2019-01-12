import { NewsServiceProvider } from '../providers/service/newsService'
import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';

describe('Service: newsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [
        AngularFireAuth,
        NewsServiceProvider
      ]
    })
  }));
  
  it('should find all news NewsService', inject([NewsServiceProvider], (service: NewsServiceProvider) => {
    service.getNews('News').then((data) => {
      expect(data).not.toBeUndefined();
    })
  }));

  it('should not find all news NewsService', inject([NewsServiceProvider], (service: NewsServiceProvider) => {
    service.getNews("").then((data) => {
      expect(data).toBeUndefined();
    })
    .catch((error) => {
      expect(error).not.toBeUndefined();
    });
  }));

  it('should insert a new news NewsService', inject([NewsServiceProvider], (service: NewsServiceProvider) => {
    service.insertNews('News', "newNews", {title: "title", content: "content", date: new Date()}).then((data) => {
      expect(data).not.toBeUndefined();
    })
  }));

  it('should not insert an undefined news NewsService', inject([NewsServiceProvider], (service: NewsServiceProvider) => {
    service.insertNews('News', undefined, undefined).then((data) => {
      expect(data).toBeUndefined();
    })
    .catch((error) => {
      expect(error).not.toBeUndefined();
    });
  }));

});
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

    it('should call fetchData from apiService', function (done) {
        let service :NewsServiceProvider =  new NewsServiceProvider();

        spyOn(service, 'getNews').and.returnValue(Promise.resolve([{
            content: "News inserita dall'admin",
            date: new Date(),
            id: "NEWS dell'admin 18:07 :)",
            title: "NEWS dell'admin 18:07 :)"
        }]));

        service.getNews('News').then((data) => {
            console.log("News data",data)
            expect(data[0].title).toEqual("NEWS dell'admin 18:07 :)")
            done();
        })
    });
});
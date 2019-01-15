import { NewsServiceProvider } from '../providers/service/newsService'
import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { textChangeRangeIsUnchanged } from 'typescript';

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

    it('should call getNews from NewsService', function (done) {
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
            expect(service.getNews).toHaveBeenCalledWith("News")
            done();
        })
    });

    it('should not call getNews from NewsService', function (done) {
        let service: NewsServiceProvider =  new NewsServiceProvider();

        spyOn(service, 'getNews').and.returnValue(Promise.reject([{
            errore: "fallito"
        }]));

        service.getNews('News').then().catch((error) => {
            expect(error[0].errore).toEqual("fallito");
            done();
        })
    });

    it('should call insertNews NewsService', function (done) {
        let service: NewsServiceProvider =  new NewsServiceProvider();

        spyOn(service, 'insertNews').and.returnValue(Promise.resolve());
        service.insertNews("News", "newNews", {title: "title", content: "contenuto", date: new Date()});

        expect(service.insertNews).toHaveBeenCalled();
        done();
    });

    it('should not call insertNews NewsService', function (done) {
        let service: NewsServiceProvider =  new NewsServiceProvider();

        spyOn(service, 'insertNews').and.returnValue(Promise.resolve());
        
        expect(service.insertNews).not.toHaveBeenCalled();
        done();
    });

    it('should not insert news', function (done) {
        let service: NewsServiceProvider =  new NewsServiceProvider();

        spyOn(service, 'insertNews').and.returnValue(Promise.reject([{
            errore: "fallito"
        }]));

        service.insertNews('News', "", {}).then().catch((error) => {
            expect(error[0].errore).toEqual("fallito");
            done();
        })
    });

});
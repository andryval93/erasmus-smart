import { NewsServiceProvider } from '../providers/service/newsService'
import { TestBed, async, inject } from '@angular/core/testing';
import { reject } from 'q';

describe('Service: newsService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
            ],
            providers: [
                NewsServiceProvider
            ]
        })
    }));

    it('getNews Test: prende un oggetto dal DB e controlla se è consistente', function (done) {
        let service: NewsServiceProvider =  new NewsServiceProvider();

        service.getNews('News')
            .then((data) => {
                var rand = Math.floor(Math.random()*data.length)+1;
                
                expect(data[rand].title).toBeDefined()
                expect(data[rand].date).toBeDefined()
                expect(data[rand].content).toBeDefined()
                expect(data[rand].id).toBeDefined()
                done();
            }).catch(error => {
                reject(error);
                expect(error).toBeDefined();
                done()
            });
    });

    it('insertNews Test: inserisce un oggetto nel db', function (done) {
        let service: NewsServiceProvider =  new NewsServiceProvider();

        expect(service.insertNews("TEST_News", "TEST_NEW_NEWS", {title: "TEST_TITLE", content: "TEST_CONTENT", date: new Date()})).toBeDefined();
        done();
    });
});
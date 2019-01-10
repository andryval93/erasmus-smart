import { NewsServiceProvider } from "./newsService";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../../config/env';
import { AngularFireAuth } from 'angularfire2/auth';

describe ('News Service Provider', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                AngularFireModule.initializeApp(ENV.firebase),
                HttpClientTestingModule
            ],
            providers: [
                AngularFireAuth,
                NewsServiceProvider
            ]
        })
    }));
    
    it('should do defined NewsServiceProvider', inject([NewsServiceProvider], (service: NewsServiceProvider) => {
        expect(service).toBeDefined();
    }))
});
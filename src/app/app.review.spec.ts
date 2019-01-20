import { reviewService } from '../providers/service/reviewsService';
import { TestBed } from '@angular/core/testing';
import { reject } from 'q';

describe('REVIEW TEST', () => {

  beforeEach((() => {
    /* this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;*/
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [
        reviewService,
      ]

    })

  }));


  it('getUniversities TEST : Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
    let service: reviewService = new reviewService();
    service.getUniversities("Reviews").then((result) => {

        var rand = Math.floor((Math.random() * result.length));
        var randDom = Math.floor((Math.random() * (result[rand].ReviewsList).length));
        
        console.log("rand test ", rand);
        console.log("rand test ", randDom);

        expect(result[rand].id).not.toBeDefined()
        expect(result[rand].uni_name).not.toBeDefined()
        /*expect(result[rand].ReviewsList[randDom]).not.toBeDefined()
        expect(result[rand].ReviewsList[randDom].date).not.toBeDefined()
        expect(result[rand].ReviewsList[randDom].recensore).not.toBeDefined()
        expect(result[rand].ReviewsList[0].starts).not.toBeDefined()
        expect(result[rand].ReviewsList[randDom].text).not.toBeDefined()*/

        if ((result[rand].id) != undefined) {
          done()
        }
      }).catch(error => {
        reject(error);
        expect(error).toBeDefined();
        done()
      });
  });


  it('getReviews TEST : Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
    let service: reviewService = new reviewService();
    service.getReviews("Reviews").then((result) => {

        var rand = Math.floor((Math.random() * result.length));
        var randDom = Math.floor((Math.random() * (result[rand].ReviewsList).length));
        
        console.log("rand test ", rand);
        console.log("rand test ", randDom);

        expect(result[rand].id).not.toBeDefined()
        expect(result[rand].uni_name).toBeDefined()
        expect(result[rand].ReviewsList[randDom]).not.toBeDefined()
        expect(result[rand].ReviewsList[randDom].date).toBeDefined()
        expect(result[rand].ReviewsList[randDom].recensore).toBeDefined()
        expect(result[rand].ReviewsList[0].starts).toBeDefined()
        expect(result[rand].ReviewsList[randDom].text).toBeDefined()

        if ((result[rand].id) != undefined) {
          done()
        }
      }).catch(error => {
        reject(error);
        expect(error).toBeDefined();
        done()
      });
  });

  /* addReview TEST */
  it('addReview TEST ', function (done) {
    let service: reviewService = new reviewService();

    expect(service.addReview("TEST_COL", "TEST_DOC", "TEST_CONTENT")).toBeDefined();
    done()
  });
});
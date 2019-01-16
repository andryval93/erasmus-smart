import { TestBed, async, inject } from '@angular/core/testing';
import { QeaServiceProvider } from '../providers/service/qeaService';
import { reject } from 'q';




describe('Service: QeaService', () => {

  beforeEach(async(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
    TestBed.configureTestingModule({
      declarations: [

      ],
      imports: [

      ],
      providers: [
        QeaServiceProvider,

      ]
    });

  }));

  it('getAnswers Test: Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
    let service: QeaServiceProvider = new QeaServiceProvider();
    service.getAnswers("Q&A").then((result) => {

      var rand = Math.floor((Math.random() * result.length));
      var randDom = Math.floor((Math.random() * (result[rand].Domande).length));

      console.log("rand test ", rand);
      console.log("rand test ", randDom);
      expect(result[rand].id).toBeDefined()
      expect(result[rand].Domande[randDom]).toBeDefined()
      expect(result[rand].Domande[randDom].Descrizione).toBeDefined()
      expect(result[rand].Domande[randDom].Domanda).toBeDefined()
      expect(result[rand].Domande[randDom].risposte).toBeDefined()
      expect(result[rand].Sede).toBeDefined()

      if ((result[rand].id) != undefined) {
        done()
      }
    }).catch(error => {
      reject(error);
      expect(error).toBeDefined();
      done()
    });
  });

  it('getQuestions Test: Prende un Oggetto Randomico dal Database e controlla se è consistente', function (done) {
    let service: QeaServiceProvider = new QeaServiceProvider();
    service.getQuestions("Q&A").then((result) => {

      var rand = Math.floor(Math.random() * result.length);
      console.log("rand test", rand);

      expect(result[rand].id).toBeDefined()
      expect(result[rand].Domande[0]).toBeDefined()
      expect(result[rand].Sede).toBeDefined()
      if ((result[rand].id) != undefined) {
        done()
      }
    }).catch(error => {
      reject(error);
      expect(error).toBeDefined();
      done()
    });
  });

  /* insertAnswer TEST */
  it('insertAnswer TEST ', function (done) {
    let service: QeaServiceProvider = new QeaServiceProvider();

    expect(service.insertAnswer("TEST_COL", "TEST_DOC", "TEST_CONTENT")).toBeDefined();
    done()
  });

  /* insertQuestion TEST */
  it('insertQuestion TEST ', function (done) {
    let service: QeaServiceProvider = new QeaServiceProvider();

    expect(service.insertQuestion("TEST_COL", "TEST_DOC", "TEST_CONTENT")).toBeDefined();
    done()
  });

}); 
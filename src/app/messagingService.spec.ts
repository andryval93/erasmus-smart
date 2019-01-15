import { TestBed, inject } from '@angular/core/testing';
import { MessageProvider } from '../providers/service/messagingService';
import { reject } from 'q';
import { } from 'jasmine-spec-reporter'
import { AngularFireStorage } from 'angularfire2/storage';
import { doesNotThrow } from 'assert';

describe('MESSAGESERVICE TEST', () => {

  let originalTimeout: number;

  beforeEach((() => {
   /* this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;*/
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [
        MessageProvider,
        AngularFireStorage
      ]
    })
  }));
  
/*
  it('getAllMessages("Messages", "vincenzo.veniero@live.itruggero_93@live.it") TEST : Prende una collezione di oggetti dal Database e controlla se è consistente', function (done) {
   
    let n: number = 0;
    let service: MessageProvider = new MessageProvider();
    
    service.getAllMessages("Messages", "vincenzo.veniero@live.itruggero_93@live.it")
      .then((result) => {
          let messages = [];
          result.forEach(el => {
            this.messages.push(el)
          });
          expect(messages[0].message).toBeDefined()
          expect(messages[0].creationTime).toBeDefined()
          expect(messages[0].receiver).toBeDefined()
          expect(messages[0].sender).toBeDefined()
          done();
        }).catch(error => {
        reject(error);
        expect(error).toBeDefined();
        done()
      });

  });
 
  it('sendMessage("Messages", "vincenzo.veniero@live.itruggero_93@live.it", message) TEST ', function (done) {
    let service: MessageProvider = new MessageProvider();
    let message = {
      message: "Testo" ,
      creationTime: "15/1/2019, 16:57:41",
      sender: "vincenzo.veniero@live.it",
      receiver: "ruggero_93@live.it"
    }
    expect(service.sendMessage("Messages", "vincenzo.veniero@live.itruggero_93@live.it", message)).toBeDefined();
    done();
  });*/
  
 /* it('getObserver("Messages", "vincenzo.veniero@live.itruggero_93@live.it", message) TEST ', function (done) {
    let service: MessageProvider = new MessageProvider();
    expect(service.getObserver("Messages/vincenzo.veniero@live.itruggero_93@live.it/Messages")).toBeDefined();
  });*/
  
  /*it('startChat("vincenzo.veniero@live.itruggero_93@live.it", true) TEST ', function (done) {
    let service: MessageProvider = new MessageProvider();
    expect(service.startChat("vincenzo.veniero@live.itruggero_93@live.it", true)).toBeDefined();
    done();
  });
  */
  it('uploadFile: Caricamento di un file PDF', inject([AngularFireStorage], (storage: AngularFireStorage) => {
    let service: MessageProvider = new MessageProvider(storage);
    let _event = {
      file: {
        lastModified: 1547587322963,
        name: "test.pdf",
        size: 0,
        type: "application/pdf",
        webkitRelativePath: ""
      }
    }
    expect(service.uploadFile(_event, new Date().toLocaleString + "_Test")).toBeDefined();
  }));
});
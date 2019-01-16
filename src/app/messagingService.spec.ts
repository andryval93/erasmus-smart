import { TestBed, inject } from '@angular/core/testing';
import { MessageProvider } from '../providers/service/messagingService';
import { reject } from 'q';
import { } from 'jasmine-spec-reporter'
import { AngularFireStorage } from 'angularfire2/storage';
import { doesNotThrow } from 'assert';
import { AngularFireModule } from 'angularfire2';
import { ENV } from '../config/env';

describe('MESSAGESERVICE TEST', () => {

  let originalTimeout: number;

  beforeEach((() => {
    /* this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;*/
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AngularFireModule.initializeApp(ENV.firebase)
      ],
      providers: [
        MessageProvider,
        AngularFireStorage
      ]
    })
  }));

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

  it('saveFileInfo: Salvataggio del path del file caricato su Firebase', inject([AngularFireStorage], (storage: AngularFireStorage) => {
    let service: MessageProvider = new MessageProvider(storage);
    let fileInfo = {
      author: "Testing",
      name: "filetest.pdf",
      uploadDate: new Date().toLocaleString(),
      urlFile: "urltest",
    }
    let idChat = "testsavefileinfotutor@test.ittestsavefileinfostudent@test.it"
    expect(service.saveFileInfo(idChat, fileInfo)).toBeDefined();
  }));
});
import { TestBed } from '@angular/core/testing';
import { ServiceProvider } from '../providers/service/stepService';
import { SingletonDatabase } from '../model/Database';
import { doesNotThrow } from 'assert';
describe('STEPPER TEST', () => {

  beforeEach((() => {

   /* this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;*/
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
      ],
      providers: [
        ServiceProvider,
      ]
    })
  }));
  
  it('getSingleton() (StepService + SingletonDatabase) : TEST controlla se DBIstance viene creata una sola volta', function (done) {
    let service: ServiceProvider = new ServiceProvider();
    //service.getSingleton();
    expect(SingletonDatabase.test).toBeTruthy();
 done()
  });

});

import { TestBed, async, inject } from '@angular/core/testing';
import { Message } from '../model/model';

describe('Test Bean: Message', () => {
    let message: Message;

    beforeEach(function () {
       message = new Message("","","","")
       spyOn(message, 'setSender');
       message.setSender("Andrea");
    });

    it("tracks that the spy was called", function() {
        expect(message.setSender).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function() {
        expect(message.setSender).toHaveBeenCalledWith("Andrea");
    });
});
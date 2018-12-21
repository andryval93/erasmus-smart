import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}



export const ENV = {
  //production: false,
  firebase: {
    apiKey: "AIzaSyAvsN-Bx5AikaynT77QYEbqM6hdgQPj_Fk",
    authDomain: "erasmus-smart-2018.firebaseapp.com",
    databaseURL: "https://erasmus-smart-2018.firebaseio.com",
    projectId: "erasmus-smart-2018",
    storageBucket: "erasmus-smart-2018.appspot.com",
    messagingSenderId: "889487613640"
  }
};

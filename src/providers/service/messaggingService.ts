import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';



// Import firebase and firestore

//import * as firebase from 'firebase';

import 'firebase/firestore';
import { SingletonDatabase } from '../../model/Database';
import { resolve } from 'url';



/*

  Generated class for the DatabaseProvider provider.



  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/

@Injectable()

export class MessaggingService {
  
  //private DBistance: any;
    DBistance: any;
 
  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
    //this.DBistance = firebase.firestore();
    this.DBistance =  SingletonDatabase.getInstance();
  }

  startChat(docId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.DBistance.collection("Messagges").doc(docId).then((obj: any) => {
                        resolve(obj);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }
}
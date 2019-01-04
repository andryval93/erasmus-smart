import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';



// Import firebase and firestore

//import * as firebase from 'firebase';

import 'firebase/firestore';
import { SingletonDatabase } from '../../model/Database';



/*

  Generated class for the DatabaseProvider provider.



  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/

@Injectable()

export class NewNewsProvider {
  
  //private DBistance: any;
    DBistance: any;
 
  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
    //this.DBistance = firebase.firestore();
  this.DBistance =  SingletonDatabase.getInstance();
  }

  

  /**
  * Create the database collection and defines an initial document
  * Note the use of merge : true flag within the returned promise  - this
  * is needed to ensure that the collection is not repeatedly recreated should
  * this method be called again (we DON'T want to overwrite our documents!)
  */
  createAndPopulateDocument(collectionObj: string,
                            docID: string,
                            dataObj: any) : Promise<any>{
     return new Promise((resolve, reject) => {
      this.DBistance
       .collection(collectionObj)
       .doc(docID)
       .set(dataObj, {merge: true})
       .then((data : any) => {
         resolve(data);
       })
       .catch((error: any) => {
         reject(error);
       })
     })
  }

  /**
   * Add a new document to a selected database collection
   */
    addDocument(collectionObj: string,
        docID: String,
        dataObj: any) : Promise<any>{
            return new Promise((resolve, reject) => {
                this.DBistance
                .collection(collectionObj)
                .doc(docID)
                .set(dataObj)
                .then((data : any) => {
                resolve(data);
                })
                .catch((error: any) => {
                reject(error);
                })
            })
        }

}
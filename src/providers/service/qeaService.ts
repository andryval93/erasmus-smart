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

export class QeaServiceProvider {
  
  //private DBistance: any;
    DBistance: any;
  Domande: any;
 
  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
    //this.DBistance = firebase.firestore();
  this.DBistance =  SingletonDatabase.getInstance();
  }

  // Q&A TS
  
  /*
   * Return documents from specific database collection
   
  getDocuments(collectionObj: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];
        querySnapshot
        .forEach((doc: any) => {
          obj.push({
           id             : doc.id,
           Domande        : doc.data().Domande,
           Domanda        : doc.data().Domanda,
           risposte       : doc.data().risposte,
           Sede           : doc.data().Sede
          
          }); 
        });
        
      resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }

  /**
   * Add a new document to a selected database collection
   
  addDocument(collectionObj: string,
    docID: String,
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
*/

// RISPOSTEEEEEEEEEEEEEEEEEEEEEEEEEE

    /*
     * Return documents from specific database collection
     */
    getAnswers(collectionObj: string): Promise<any> {
      return new Promise((resolve, reject) => {
          this.DBistance.collection(collectionObj)
              .get()
              .then((querySnapshot) => {
                  let obj: any = [];
                  querySnapshot
                      .forEach((doc: any) => {
                          obj.push({
                              id: doc.id,
                              Domande: doc.data().Domande,
                              Domanda: doc.data().Domanda,
                              risposte: doc.data().risposte,
                              Sede: doc.data().Sede

                          });
                      });

                  resolve(obj);
              })
              .catch((error: any) => {
                  reject(error);
              });
      });
  }
/**
 * Add a new document to a selected database collection
 * (insertAnswer)
 */
insertAnswer(collectionObj: string, 
  docID: String,
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

// NUOVA DOMANDAAAAAAAAAAAAAAAAAAAAAAAAA

/*
   * Return documents from specific database collection
   */
  getQuestions(collectionObj: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];
        querySnapshot
        .forEach((doc: any) => {
          obj.push({
           id             : doc.id,
           Domande        : doc.data().Domande,
           Sede           : doc.data().Sede
          
          }); 
        });
        
      resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }
  /**
   * Add a new document to a selected database collection
   */
  insertQuestion(collectionObj: string,
    docID: String,
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

}
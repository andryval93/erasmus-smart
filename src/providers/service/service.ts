/*import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import 'firebase/firestore';
import { SingletonDatabase } from '../../model/Database';



/*

  Generated class for the DatabaseProvider provider.



  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/
/*
@Injectable()

export class ServiceProvider {

  //private DBistance: any;
  DBistance: any;

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
    //this.DBistance = firebase.firestore();
    this.DBistance = SingletonDatabase.getInstance();
  }



  /**
  * Create the database collection and defines an initial document
  * Note the use of merge : true flag within the returned promise  - this
  * is needed to ensure that the collection is not repeatedly recreated should
  * this method be called again (we DON'T want to overwrite our documents!)
  *//*
  createAndPopulateDocument(collectionObj: string,
    docID: string,
    dataObj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance
        .collection(collectionObj)
        .doc(docID)
        .set(dataObj, { merge: true })
        .then((data: any) => {
          resolve(data);
        })
        .catch((error: any) => {
          reject(error);
        })
    })
  }
  /*
   * Return documents from specific database collection
   *//*
getDocuments(collectionObj: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj)
        .get()
        .then((querySnapshot) => {
          let obj: any = [];
          querySnapshot
            .forEach((doc: any) => {
              obj.push({
                id: doc.id,
                citta: doc.data().citta,
                nazione: doc.data().nazione,
                nome: doc.data().nome,
                recensioni: doc.data().recensioni

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
   *//*
  addDocument(collectionObj: string,
    dataObj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj).add(dataObj)
        .then((obj: any) => {
          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }


  /**
   * Delete an existing document from a selected database collection
   *//*
  deleteDocument(collectionObj: string,
    docID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance
        .collection(collectionObj)
        .doc(docID)
        .delete()
        .then((obj: any) => {
          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
  /**
   * Update an existing document within a selected database collection
   *//*
  updateDocument(collectionObj: string,
    docID: string,
    dataObj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance
        .collection(collectionObj)
        .doc(docID)
        .update(dataObj)
        .then((obj: any) => {
          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}*/
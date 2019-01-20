

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import 'firebase/firestore';
import { SingletonDatabase } from '../../model/Database';



/*

  Generated class for the DatabaseProvider provider.



  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/

@Injectable()

export class reviewService {

  //private DBistance: any;
  DBistance: any;

  constructor() {
    console.log('Hello DatabaseProvider Provider');
    //this.DBistance = firebase.firestore();
    this.getSingleton();
  }

  async getSingleton()
  {
    this.DBistance=SingletonDatabase.getInstance();
  }


  /**
  * Create the database collection and defines an initial document
  * Note the use of merge : true flag within the returned promise  - this
  * is needed to ensure that the collection is not repeatedly recreated should
  * this method be called again (we DON'T want to overwrite our documents!)
  */
 /*
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
  }*/
  /*
   * Return documents from specific database collection
   */

  getUniversities(collectionObj: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj)
        .get()
        .then((querySnapshot) => {
          let obj: any = [];
          querySnapshot
            .forEach((doc: any) => {
              obj.push({
                id: doc.id,
                nome: doc.data().uni_name,
              });
            });

          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }



  getReviews(collectionObj: string): Promise<any> {
    let obj: any = [];
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj)
        .get()
        .then((querySnapshot) => {
          if(collectionObj.localeCompare("Reviews") == 0){
          querySnapshot
            .forEach((doc: any) => {
              obj.push({
                id: doc.id,
                Reviews: doc.data().ReviewsList,
                university: doc.data().uni_name,
                /*inserisci recensione e cattura account inizio. Merge with inserisciRecensioneService*/
                date           : doc.data().date,
                recensore      : doc.data().recensore,
                stars          : doc.data().stars,
                text           : doc.data().text,
                 /*inserisci recensione e cattura account fine Merge with inserisciRecensioneService*/
              });
            });
          }
          else 
          {    /* Efficienza con un solo metodo posso leggere in utti i documenti 
               / evitando di appesantire l'oggetto 'obj' con molte variabili 'undefined' */
            querySnapshot
            .forEach((doc: any) => {
              obj.push({
                id             : doc.id,
                sede           : doc.data().sede
              });
            });
          }
          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

 /*aggiungi recensione inizio. Merge with inserisciRecensioneService*/
  addReview(collectionObj: string,
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
 /*aggiungi recensione fine. Merge with inserisciRecensioneService*/

/*getReviews(collectionObj: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj)
        .get()
        .then((querySnapshot) => {
          let obj: any = [];
          querySnapshot
            .forEach((doc: any) => {
              obj.push({
                id: doc.id,
                recensione: doc.data().Text,
                inserzionista: doc.data().Recensore,
                stelle: doc.data().Stars,
                recensioni: doc.data().recensioni,
                data: doc.data().data
              });
            });

          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }*/
  /**
   * Add a new document to a selected database collection
   */
  /*addDocument(collectionObj: string,
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
  }*/


  /**
   * Delete an existing document from a selected database collection
   */
  /*deleteDocument(collectionObj: string,
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
  }*/
  /**
   * Update an existing document within a selected database collection
   */
  /*
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
    }*/
}
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';



// Import firebase and firestore

//import * as firebase from 'firebase';

import 'firebase/firestore';
import { SingletonDatabase } from '../../model/Database';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';



/*

  Generated class for the DatabaseProvider provider.



  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/

@Injectable()

export class AccountService {
  public user: firebase.User;
  static user: any;
  //private DBistance: any;
  DBistance: any;
  public undef = undefined;

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello DatabaseProvider Provider');
    //this.DBistance = firebase.firestore();
    this.afAuth.authState.subscribe(user => {
      this.user = user;

    });
    this.DBistance = SingletonDatabase.getInstance();
  }

  registration(collectionObj: string, docId: string,
    dataObj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj).doc(docId).set(dataObj)
        .then((obj: any) => {
          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  getAccount(collectionObj: string, docID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj).doc(docID).get().then((data: any) => {
        resolve(data);
      }).catch((error: any) => {
        reject(error);
      })
    })
  }

  getTypeAccount(collectionObj: string, docID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj).doc(docID).get().then((data: any) => {
        resolve(data.data().userType);
      }).catch((error: any) => {
        reject(error);
      })
    })
  }

  getStudentStatus(collectionObj: string, docID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj).doc(docID).get().then((data: any) => {
        resolve(data.data().status);
      }).catch((error: any) => {
        reject(error);
      })
    })
  }

  acceptRequest(docID: string, emailtutor: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let request = {
        status: "accepted",
        tutor: emailtutor
      }
      this.DBistance.collection("Account").doc(docID).set(request, { merge: true }).then((data: any) => {
        resolve(data);
      }).catch((error: any) => {
        reject(error);
      })
    })
  }

  denyRequest(docID: string, deleteFromList: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection("Account").doc(docID).set(deleteFromList, { merge: true }).then((data: any) => {
        resolve(data);
      }).catch((error: any) => {
        reject(error);
      })
    })
  }

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
      credentials.password);
  }

  /**
   * Delete an existing document from a selected database collection
   */
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
}
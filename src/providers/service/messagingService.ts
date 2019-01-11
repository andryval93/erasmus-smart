
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

// Import firebase and firestore
//import * as firebase from 'firebase';
import 'firebase/firestore';
import { AngularFireStorage } from "angularfire2/storage";
import { SingletonDatabase } from '../../model/Database';


/*

  Generated class for the DatabaseProvider provider.



  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/

@Injectable()

export class MessageProvider {

    //private DBistance: any;
    DBistance: any;


    constructor(private storage: AngularFireStorage) {
        console.log('Hello DatabaseProvider Provider');
        //this.DBistance = firebase.firestore();

        this.DBistance = SingletonDatabase.getInstance();
    }

    getObserver(docID: any): any {
        return this.DBistance.collection("/Messages/" + docID + "/Messages")
    }

    sendMessage(collectionObj: string,
        docID: any, newMessage: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.DBistance.collection(collectionObj).doc(docID).collection('Messages').add(newMessage)
                .then((obj: any) => {
                    resolve(obj);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }

    getAllMessages(collectionObj: string, docID: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.DBistance.collection(collectionObj).doc(docID).collection('Messages').orderBy("creationTime", "desc").get() //messages interno che contiene i singoli messaggi
                .then((querySnapshot) => {
                    let obj: any = [];
                    querySnapshot
                        .forEach((doc: any) => {
                            obj.push({
                                message: doc.data().message ,
                                creationTime: doc.data().creationTime,
                                sender: doc.data().sender,
                                receiver: doc.data().receiver
                            });
                        });

                    resolve(obj);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });

    }

    startChat(docId: string, dataObj: any): Promise<any> {
        return new Promise((resolve, reject) => {
          this.DBistance.collection("Messages").doc(docId).set(dataObj)
              .then((obj: any) => {
                  resolve(obj);
              })
              .catch((error: any) => {
                  reject(error);
              });
      });

    }

    /**
     * @description Permette il caricaricamento di un file all'interno dello storage di Firebase
     * @author Giosuè Sulipano
     * 
     * Need to be tested!!
     */
    uploadFile(fileToUpload, path: string, percentage: Observable<number>) {
        const file = fileToUpload.target.files[0];
        const filePath = "files/" + path;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);

        percentage = task.percentageChanges();
    }
}
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'
// Import firebase and firestore
//import * as firebase from 'firebase';
import 'firebase/firestore';
import { AngularFireStorage } from "angularfire2/storage";
import { SingletonDatabase } from '../../model/Database';
//declare var require: any;

/*

  Generated class for the DatabaseProvider provider.



  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/

@Injectable()

export class MessageProvider {

    //private DBistance: any;
    DBistance: any;
    //url: Observable<string | null>;
    url: Promise<any>;
    
    constructor(private storage: AngularFireStorage) {
        this.getSingleton();
    }
    
    async getSingleton(){
      this.DBistance = SingletonDatabase.getInstance();
    }

    getObserver(docID: any): any {
        return this.DBistance.collection("/Messages/" + docID + "/Messages")
    }

    getFileObserver(docID: any): any {
        return this.DBistance.collection("/Messages/" + docID + "/Files")
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
            this.DBistance.collection(collectionObj).doc(docID).collection('Messages').orderBy("creationTime", "asc").get() //messages interno che contiene i singoli messaggi
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

    getFiles(collectionObj: string, docID: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.DBistance.collection(collectionObj).doc(docID).collection('Files').orderBy("uploadDate", "asc").get()
                .then((querySnapshot) => {
                    let obj: any = [];
                    querySnapshot
                        .forEach((doc: any) => {
                            obj.push({
                                name: doc.data().name,
                                dateUploaded: doc.data().dateUploaded,
                                urlFile: doc.data().urlFile,
                                author: doc.data().author
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
     */
    uploadFile(fileToUpload, path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const file = fileToUpload.target.files[0];
            const filePath = "files/chat/" + path + "_" + file.name;
            let ref = this.storage.ref(filePath);
            ref.put(file).then((obj: any) => {
                this.url = this.storage.storage.ref(filePath).getDownloadURL();
                this.url.then((txt) => {
                    resolve(txt);
                });
            }).catch((error: any) => {
                reject(error);
            });
        });
    }
    /**
     * @description Aggiunge le info del file appena caricato all'interno del database
     * @author Giosuè Sulipano
     */
    saveFileInfo(docID: any, newFileInfo: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.DBistance.collection('Messages').doc(docID).collection('Files').add(newFileInfo)
                .then((obj: any) => {
                    resolve(obj);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }
}
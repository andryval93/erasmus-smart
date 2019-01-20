import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'firebase/firestore';
import { SingletonDatabase } from '../../model/Database';


@Injectable()

export class NewsServiceProvider {
  DBistance: any;

  constructor() {
    console.log('Hello DatabaseProvider Provider');
    this.getSingleton();
  }

  async getSingleton() {
    this.DBistance = SingletonDatabase.getInstance();
  }

  /**
   * @description Recupera le news dal database
   * @author Giosuè Sulipano
   */
  getNews(collectionObj: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance.collection(collectionObj)
        .get()
        .then((querySnapshot) => {
          let obj: any = [];
          querySnapshot
            .forEach((doc: any) => {
              obj.push({
                id: doc.id,
                title: doc.data().title,
                date: doc.data().date,
                content: doc.data().content
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
   * @description Aggiunge una nuova news all'interno del database
   * @author Giovanni Buonincontri
   */
  insertNews(collectionObj: string,
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
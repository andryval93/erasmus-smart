
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'firebase/firestore';
import { SingletonDatabase } from '../../model/Database';


@Injectable()

export class StepService {

  //private DBistance: any;
  DBistance: any;
   constructor() { 
      this.getSingleton();
  }
  async getSingleton(){
    this.DBistance = SingletonDatabase.getInstance(); 
  }
  /*
   * Return documents from specific database collection
   */
   getStepsDocuments(collectionObj: string): Promise<any> {
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
                citta: doc.data().citta,
                nazione: doc.data().nazione,
                nome : doc.data().nome,
                uni_name : doc.data().uni_name,
                ReviewsList : doc.data().ReviewsList,
              });
            });
          } 
          else {
            querySnapshot
            .forEach((doc: any) => {
              obj.push({
                id: doc.id,
                name: doc.data().name,
                surname: doc.data().surname,
                students: doc.data().students,
                userType: doc.data().userType,
                step: doc.data().step,
                status: doc.data().status,
                sede: doc.data().sede,
                tutor: doc.data().tutor,
              });
            });
            }
          resolve(obj);
        })
    });
  }
  /**
   * Add a new document to a selected database collection
   */
  addStepsDocument(collectionObj: string,
    docID: String,
    dataObj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.DBistance
        .collection(collectionObj)
        .doc(docID)
        .set(dataObj, { merge: true })
        .then((data: any) => {
          resolve(data);
        })
    })
  }


}
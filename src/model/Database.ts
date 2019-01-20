
import * as firebase from 'firebase';

import 'firebase/firestore';

export class SingletonDatabase {
    private static DBistance: firebase.firestore.Firestore;
    static count: number = 0;
    private constructor() {
        SingletonDatabase.getInstance();
    }

    static getInstance(): firebase.firestore.Firestore {
              
        if (SingletonDatabase.DBistance != firebase.firestore()) {
            this.count=this.count +1 ;
            SingletonDatabase.DBistance = firebase.firestore();
            return SingletonDatabase.DBistance;
        } else {
            return SingletonDatabase.DBistance;
        }

    }
}

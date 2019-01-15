
import * as firebase from 'firebase';

import 'firebase/firestore';

export class SingletonDatabase {
    private static DBistance: firebase.firestore.Firestore;
    static test: boolean = false;
    private constructor() {
        SingletonDatabase.getInstance();
    }

    static getInstance(): firebase.firestore.Firestore {

        if (this.test == false) {
            this.test = true ;
            return firebase.firestore()
        } else {
            return this.DBistance
        }

    }
}
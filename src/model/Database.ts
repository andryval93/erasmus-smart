
import * as firebase from 'firebase';

import 'firebase/firestore';

export class SingletonDatabase {
    private static DBistance: firebase.firestore.Firestore;
    private constructor() {
        SingletonDatabase.getInstance();
    }

    static getInstance(): firebase.firestore.Firestore {

        if (this.DBistance == undefined) {
            return firebase.firestore()
        } else {
            return this.DBistance
        }

    }
}
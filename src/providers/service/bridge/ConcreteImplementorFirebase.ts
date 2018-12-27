import { SingletonDatabase } from '../../../model/Database';

export class ConcreteImplementorFirebase implements ManageDataImplementor {
    DBistance: any;

    constructor() {
        this.DBistance = SingletonDatabase.getInstance();
    }

    getDocument(collectionObj: string) {
        return this.DBistance.collection(collectionObj).get();
    }
    addDcoument(collectionObj: string, dataObj: any) {
        return this.DBistance.collection(collectionObj).add(dataObj);
    }
    editDocument(collectionObj: string, docID: string, dataObj: any) {
        return this.DBistance.collection(collectionObj).doc(docID).update(dataObj);
    }
    deleteDocument(collectionObj: string, docID: string) {
        return this.DBistance.collection(collectionObj).doc(docID).delete();
    }
}
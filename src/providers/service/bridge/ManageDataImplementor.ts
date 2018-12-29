interface ManageDataImplementor{
    getDocument(collectionObj: string):any;
    addDcoument(collectionObj: string,dataObj: any):any;
    editDocument(collectionObj: string,docID: string,dataObj: any):any;
    deleteDocument(collectionObj: string,docID: string):any;
}
class RefinedAbstraction extends Abstraction{

	constructor(manageData:ManageDataImplementor) {
        super(manageData);
    }
    
    getDocument(collectionObj: string){
        return this.manageDataImplementor.getDocument(collectionObj);
    }

}
abstract class Abstraction {
	constructor(public manageDataImplementor:ManageDataImplementor) {
    }
    
    public abstract getDocument(collectionObj: string):string;
}
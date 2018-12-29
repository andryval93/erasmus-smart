import { List } from "lodash";

  export class Account {
    email: string;
    name: string;
    surname: string;
    type: string;
    students: Array<any>;
  }
  
  export class Message {
    message: string;
    creationTime: string;
    sender: string;
    receiver: string;
  }

  export class student{
    name: string;
    surname: string;
    sede: string;
    status: string;
  }
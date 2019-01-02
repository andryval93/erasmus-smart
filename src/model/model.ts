import { List } from "lodash";

  export class Account {
    email: string;
    name: string;
    surname: string;
    type: string;
    students: Array<string>;

    setEmail(email: string){
      this.email = email;
    }

    setName(name: string){
      this.name = name;
    }

    setSurname(surname: string){
      this.surname = surname;
    }

    setType(type: string){
      this.type = type;
    }

    setStudents(students: Array<string>){
      this.students = students;
    }
    getName(){
      return this.name;
    }
    
    getStudents(){
      return this.students;
    }
  }
  
  export class Message {
    message: string;
    creationTime: string;
    sender: string;
    receiver: string;

    
    setMessage(message: string){
      this.message = message;
    }

    setCreationTime(){
   //   this.creationTime = ;
    }
    
    setSender(sender: string){
      this.sender = sender;
    }

    setReceveir(receiver: string){
      this.receiver = receiver;
    }
  }

  export class student extends Account{
    sede: string;
    status: string;

    setSede(sede: string){
      this.sede = sede;
    }

    setStatus(status: string){
      this.status = status;
    }
  }
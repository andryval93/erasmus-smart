import { Component,Input ,OnInit} from '@angular/core';
import {Message} from '../../model/model';
import firebase from 'firebase';

@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent implements OnInit{
  @Input('msg') msg:Message;
 
  email: string;
  constructor() {
   this.email = firebase.auth().currentUser.email;
  }

  ngOnInit(){
    console.log("msg=",this.msg);
   
  }
}

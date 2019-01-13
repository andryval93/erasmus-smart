import { Component,Input ,OnInit} from '@angular/core';
import {File} from '../../model/model';
import firebase from 'firebase';

@Component({
  selector: 'file',
  templateUrl: 'file.html'
})
export class FileComponent implements OnInit{
  @Input('fl') fl:File;
 
  email: string;
  constructor() {
   this.email = firebase.auth().currentUser.email;
  }

  ngOnInit(){
    console.log("fl=",this.fl);
   
  }
}

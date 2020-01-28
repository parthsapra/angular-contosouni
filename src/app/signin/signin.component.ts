import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

   constructor(private router:Router){ }

  ngOnInit() {
  }
 userJson:any=[{
   "1":{
     "firstName":"Radix",
     "email":"abc@gmail.com",
     "password":"1234"
   }
 },
 {"2":{
   "firstName":"web",
     "email":"xyz@gmail.com",
     "password":"5678"
 }}];
 signIn(){
   for(var i=0;i<this.userJson.length;i++){
     console.log(this.userJson[i]);
   }
 }
}
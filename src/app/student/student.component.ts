import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

 constructor(private router:Router){}

 students=[
   {id:1,Name:"bob",emailId:"bob@gmail.com",password:"123"},
   {id:2,Name:"alice",emailId:"alice@gmail.com",password:"456"},
   {id:3,Name:"alex",emailId:"alex@gmail.com",password:"789"},
   {id:4,Name:"tom",emailId:"tom@gmail.com",password:"741"},
 ]

  ngOnInit() {
  }

}
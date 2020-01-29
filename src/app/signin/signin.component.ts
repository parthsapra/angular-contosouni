import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router:Router) {}
  studentFormGroup: FormGroup;

students=[
   {id:1,Name:"bob",emailId:"bob@gmail.com",password:"123"},
   {id:2,Name:"alice",emailId:"alice@gmail.com",password:"456"},
   {id:3,Name:"alex",emailId:"alex@gmail.com",password:"789"},
   {id:4,Name:"tom",emailId:"tom@gmail.com",password:"741"},
 ]

  ngOnInit() {
    this.studentFormGroup = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  signIn() {
    var check:Boolean=false;
    for(var i=0;i<this.students.length;i++){
    if(this.studentFormGroup.value.email==this.students[i].emailId && this.studentFormGroup.value.password==this.students[i].password)
    {
      this.router.navigateByUrl('/student');
      check=true;
break;
    }
  }
  if(check==false){alert("Invalid Email or Password!!");}
}
}

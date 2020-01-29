import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

constructor(private router:Router,private formBuilder:FormBuilder){}
editStudentFormGroup:FormGroup;

  ngOnInit() {
this.editStudentFormGroup=this.formBuilder.group([
  id:['',Validators.required],
  Name:['',Validators.required],
  emailId:['',Validators.required],
  password:['',Validators.required],
])
  } 

} 
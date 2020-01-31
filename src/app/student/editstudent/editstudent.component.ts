import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import {StudentData} from '../app.component'

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

// @Input() student:any;

// student=StudentData;
constructor(private router:Router,private formBuilder:FormBuilder){}
editStudentFormGroup:FormGroup;

  ngOnInit() {
this.editStudentFormGroup=this.formBuilder.group({
  id:['',Validators.required],
  Name:['',Validators.required],
  emailId:['',Validators.required],
  password:['',Validators.required],
})
  } ;

  editStudent(){
    console.log(this.editStudentFormGroup);
console.log(this.student);
  }

} 
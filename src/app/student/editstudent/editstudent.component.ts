import { Component, OnInit,Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import {StudentData} from '../../studentData.model';
import {EditStudentData} from './edit-student-data.model';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

// @Input() student:any;
studentProperties:EditStudentData=new EditStudentData();
student=StudentData;
constructor(private router:Router,private formBuilder:FormBuilder,private activatedRouter:ActivatedRoute){}
editStudentFormGroup:FormGroup;
id;
  ngOnInit() {
this.id=this.activatedRouter.snapshot.paramMap.get("id");


this.editStudentFormGroup=this.formBuilder.group({
  id:['',Validators.required],
  name:['',Validators.required],
  emailId:['',Validators.required],
  password:['',Validators.required],
})
  } ;

  editStudent(){
   // console.log(this.editStudentFormGroup);
// console.log(this.student);
  }

} 
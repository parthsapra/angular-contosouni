import { Component, OnInit } from "@angular/core";
import { StudentData } from "../studentData.model";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"]
})
export class AddStudentComponent implements OnInit {
  student = StudentData;
  constructor(private router: Router, private formBuilder: FormBuilder) {}
  editStudentFormGroup: FormGroup;
  
  ngOnInit() {

console.log(this.student);

    this.editStudentFormGroup = this.formBuilder.group({
      id: ["", Validators.required],
      Name: ["", Validators.required],
      emailId: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

editStudent(){
  
}

}

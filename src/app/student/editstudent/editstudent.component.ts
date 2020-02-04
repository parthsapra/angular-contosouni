import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { StudentData } from "../../studentData.model";
import { EditStudentData } from "./edit-student-data.model";

@Component({
  selector: "app-editstudent",
  templateUrl: "./editstudent.component.html",
  styleUrls: ["./editstudent.component.css"]
})
export class EditstudentComponent implements OnInit {
  // @Input() student:any;
  studentProperties: EditStudentData = new EditStudentData();
  student = StudentData;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRouter: ActivatedRoute
  ) {}
  editStudentFormGroup: FormGroup;
  //  id=this.student;
  id;
  index;

  // name:string;
  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    //    console.log(this.index);
    // this.name=this.activatedRouter.snapshot.paramMap.get("name");
    let item = StudentData.filter(t => t.id == this.id)[0];

    // console.log(item);
    this.editStudentFormGroup = this.formBuilder.group({
      id: [item.id, Validators.required],
      name: [item.name, Validators.required],
      emailId: [item.emailId, Validators.required],
      password: [item.password, Validators.required]
    });
  }

  editStudent() {
    // console.log(this.editStudentFormGroup.value);
    // //using indexOf
    let item = StudentData.filter(t => t.id == this.id)[0];

    // item=this.editStudentFormGroup.value;
    console.log(this.id);
    console.log(StudentData.indexOf(this.id));
    StudentData[this.id - 1] = {
      id: this.editStudentFormGroup.controls.id.value,
      name: this.editStudentFormGroup.controls.name.value,
      emailId: this.editStudentFormGroup.controls.emailId.value,
      password: this.editStudentFormGroup.controls.password.value
    };
    // console.log(item);
    //working below
    // let item = StudentData.filter(t => t.id == this.id)[0];
    // item.name = this.editStudentFormGroup.controls.name.value;
    // item.emailId = this.editStudentFormGroup.controls.emailId.value;
    // item.password = this.editStudentFormGroup.controls.password.value;
    this.router.navigateByUrl("student");
    // this.student.
  }
}

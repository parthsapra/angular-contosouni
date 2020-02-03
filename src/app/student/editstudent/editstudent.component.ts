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
    this.index = this.id - 1;
    console.log(this.index);
    // this.name=this.activatedRouter.snapshot.paramMap.get("name");
    //let  item=StudentData.filter(f=> f.id==this.id[0]  );
    this.editStudentFormGroup = this.formBuilder.group({
      id: [this.id, Validators.required],
      name: [this.student[this.index].name, Validators.required],
      emailId: [this.student[this.index].emailId, Validators.required],
      password: [this.student[this.index].password, Validators.required]
    });
  }

  editStudent() {
    // console.log(this.editStudentFormGroup);
    // console.log(this.student);
    for (var i = 0; i < this.student.length; i++) {
      console.log();
    }
  }
}

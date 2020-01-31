import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {APP_LAZY_ROUTING} from './app.lazy.routing';
import { StudentComponent } from './student/student.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { CourseComponent } from './course/course.component';
import { EditcourseComponent } from './course/editcourse/editcourse.component';
import { SigninComponent } from './signin/signin.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_LAZY_ROUTING,RouterModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, StudentComponent, EditstudentComponent, CourseComponent, EditcourseComponent, SigninComponent, AddStudentComponent ],
  exports:[RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

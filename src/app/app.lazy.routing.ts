import {
  Routes,
  RouterModule,
  PreloadAllModules,
  NoPreloading
} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { StudentComponent } from "./student/student.component";
import { EditstudentComponent } from "./student/editstudent/editstudent.component";
import { CourseComponent } from "./course/course.component";
import { EditcourseComponent } from "./course/editcourse/editcourse.component";
import { SigninComponent } from "./signin/signin.component";
import { AddStudentComponent } from "./add-student/add-student.component";

const APP_LAZY_ROUTES: Routes = [
  { path: "", component: SigninComponent },
  { path: "student", component: StudentComponent },
  { path: "course", component: CourseComponent },
  { path: "student/:id", component: EditstudentComponent },
  { path: "course/:id", component: EditcourseComponent },
  { path: "add-student", component: AddStudentComponent }
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(
  APP_LAZY_ROUTES,
  {
    preloadingStrategy: NoPreloading
  }
);

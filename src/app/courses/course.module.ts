import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CourseListComponent },
      { path: ':id', component: CourseDetailComponent },
      {
        path: ':id/edit',
        canDeactivate: [ CourseEditGuard ],
        component: CourseEditComponent
      }
    ])
  ],
  declarations: [],
  providers: [
    //CourseService,
    //CourseEditGuard
  ]
})
export class CourseModule { }

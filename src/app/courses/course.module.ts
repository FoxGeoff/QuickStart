import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

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
  declarations: [CourseListComponent, CourseDetailComponent],
  providers: [
    //CourseService,
    //CourseEditGuard
  ]
})
export class CourseModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseService } from './../shared/course-service/course-service.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

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
  declarations: [CourseListComponent, CourseDetailComponent, CourseEditComponent],
  providers: [
    CourseService,
    //CourseEditGuard
  ]
})
export class CourseModule { }

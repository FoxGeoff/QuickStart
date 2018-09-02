import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseEditGuard } from '../shared/course-edit.guard';
import { CourseService } from '../shared/course.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CourseListComponent },
      { path: ':id', component: CourseDetailComponent },
      {
        path: ':id/edit',
        canDeactivate: [CourseEditGuard],
        component: CourseEditComponent
      }
    ])
  ],
  declarations: [CourseListComponent, CourseDetailComponent, CourseEditComponent],
  providers: [
    CourseService,
    CourseEditGuard
  ]
})
export class CourseModule { }

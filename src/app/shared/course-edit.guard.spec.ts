import { TestBed, async, inject } from '@angular/core/testing';

import { CourseEditGuard } from './course-edit.guard';

describe('CourseEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseEditGuard]
    });
  });

  it('should ...', inject([CourseEditGuard], (guard: CourseEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});

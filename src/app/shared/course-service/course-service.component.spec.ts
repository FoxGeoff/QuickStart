import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseServiceComponent } from './course-service.component';

describe('CourseServiceComponent', () => {
  let component: CourseServiceComponent;
  let fixture: ComponentFixture<CourseServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

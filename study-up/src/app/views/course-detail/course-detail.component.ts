import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

import { CourseService } from 'src/app/state/course.service';
import { CourseDetails } from 'src/app/state/model/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  course!: CourseDetails;
  courseId!: string;

  constructor(
    private readonly courseService: CourseService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.courseId = params['courseId'];
    });
    this.course = await this.courseService.getCourseDetails(this.courseId);
  }

}

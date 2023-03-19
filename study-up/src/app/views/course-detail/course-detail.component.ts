import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from 'src/app/state/services/course.service';
import { CourseDetails } from 'src/app/state/model/course.model';
import { courseMock } from 'src/app/state/util/mocks';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  course!: CourseDetails;
  courseId!: string;
  isLoading = false;

  constructor(
    private readonly courseService: CourseService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.courseId = params['courseId'];
    });

    this.courseService
      .getCourseDetails(this.courseId)
      .then((data) => {
        this.course = data;
      })
      .catch((err) => console.log('Error fetching course details ->', err));
  
    this.isLoading = false;

    if (!this.course) {
      this.course = courseMock;
    }
  }
}

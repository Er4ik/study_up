import { Component, OnInit } from '@angular/core';

import { CourseService } from 'src/app/state/services/course.service';
import { CoursePreview } from 'src/app/state/model/course.model';
import { coursesMock } from 'src/app/state/util/mocks';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: CoursePreview[];
  itemsPerPage = 10;
  currentPage = 1;
  isLoading = false;

  constructor(private readonly courseService: CourseService) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.courseService
      .getCourses()
      .then((data) => {
        this.courses = data;
      })
      .catch((err) => console.log('Error fetching courses ->', err));

    this.isLoading = false;

    if (!this.courses) {
      this.courses = coursesMock as CoursePreview[];
    }
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  numberReturn(length: number) {
    return new Array(Math.floor(length));
  }
}

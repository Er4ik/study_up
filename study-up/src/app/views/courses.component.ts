import { CoursePreview } from './../state/model/course.model';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../state/course.service';

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
        this.isLoading = false;
      })
      .catch((err) => console.log('Error fetching courses ->', err));
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  numberReturn(length: number) {
    return new Array(Math.floor(length));
  }
}

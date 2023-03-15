import { CoursePreview } from './../state/model/course.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  constructor(private readonly courseService: CourseService) {}

  async ngOnInit(): Promise<void> {
    this.courses = await this.courseService.getCourses();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  numberReturn(length: number) {
    return new Array(Math.floor(length));
  }
}

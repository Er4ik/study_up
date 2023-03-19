import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { CourseDetails, CoursePreview } from '../model/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url = environment.baseUrl;
  courses = new BehaviorSubject<CoursePreview[]>([]);

  constructor(private readonly http: HttpService) {}

  async getCourses() {
    if (this.courses.getValue().length) {
      return this.courses.value;
    }
    const { courses } = (await this.http
      .get<CoursePreview[]>(`${this.url}core/preview-courses`)
      .toPromise()) as any;
    this.courses.next(courses);
    return courses;
  }

  async getCourseDetails(courseId: string): Promise<CourseDetails> {
    return (await this.http
      .get<CourseDetails>(`${this.url}core/preview-courses/${courseId}`)
      .toPromise()) as CourseDetails;
  }
}

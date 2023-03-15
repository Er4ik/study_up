import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { HttpService } from './http.service';
import { CourseDetails, CoursePreview } from './model/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url = environment.baseUrl;

  constructor(private readonly http: HttpService) {}

  async getCourses() {
    const { courses } = (await this.http
      .get<CoursePreview[]>(`${this.url}core/preview-courses`)
      .toPromise()) as any;
    return courses;
  }

  async getCourseDetails(courseId: string): Promise<CourseDetails> {
    return (await this.http
      .get<CourseDetails>(`${this.url}core/preview-courses/${courseId}`)
      .toPromise()) as CourseDetails;
  }
}

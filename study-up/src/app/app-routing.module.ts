import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './views/courses.component';
import { CourseDetailComponent } from './views/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'courses',
        component: CoursesComponent,
        canActivate: [],
      },
      {
        path: 'courses/:courseId',
        component: CourseDetailComponent,
        canActivate: [],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

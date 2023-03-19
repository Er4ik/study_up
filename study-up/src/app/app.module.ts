import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './state/services/course.service';
import { CourseDetailComponent } from './views/course-detail/course-detail.component';
import { CoursesComponent } from './views/courses.component';
import { AuthService } from './state/services/auth.service';
import { HttpService } from './state/services/http.service';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [CourseService, AuthService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}

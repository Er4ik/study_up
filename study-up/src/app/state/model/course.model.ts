export interface CourseVideoPreview {
  link: string;
  duration: number;
  previewImageLink: string;
}

export interface CoursePreviewMeta {
  slug: string;
  skills: string[];
  courseVideoPreview: CourseVideoPreview;
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: string;
  link: string;
  previewImageLink: string;
  meta: null;
}

export interface CoursePreview {
  id: string;
  title: string;
  tags: string[];
  launchDate: Date;
  status: string;
  description: string;
  duration: number;
  lessonsCount?: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: CoursePreviewMeta;
}

export interface CourseDetail extends CoursePreview {
  lessons: Lesson[];
}

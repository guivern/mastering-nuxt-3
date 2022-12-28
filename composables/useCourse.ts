import courseData from './courseData';

type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  videoId: number;
  text: string;
  sourceUrl?: string;
  path: string;
};

type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
};

type Course = {
  title: string;
  chapters: Chapter[];
};

export const useCourse = (): Course => {
  // Add path to each lesson
  const chapters: Chapter[] = courseData.chapters.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    })),
  }));

  return {
    title: courseData.title,
    chapters,
  };
};

export type UpsertCourseRequest = {
  id: number | null;
  slug: string;
  title: string;
  authorId: number | null;
  category: string;
};

export type Course = {
  id: number;
  slug: string;
  title: string;
  authorId: number;
  category: string;
};

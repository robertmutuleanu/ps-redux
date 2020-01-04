export type UpsertCourseRequest = {
  id?: string;
  title: string;
  //authorId: string | null;
  //category: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  authorId: string | null;
  category: string;
};

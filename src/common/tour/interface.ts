export enum EKeyTourBlog {
  blog_1 = "blog_1",
}

export type TTourTags = ITourTagItem[];

export interface ITourTagItem {
  id: string;
  name: string;
}

export type TTourBlog = ITourBlogItem[];

export interface ITourBlogItem {
  id: string;
  overview: IOverviewTourBlog;
  detail: IDetailTourBlog;
}

export interface IOverviewTourBlog {
  title: string;
  description: string;
  image: string;
  tagIds: ITourTagItem[];
}

export interface IDetailTourBlog {
  heading: string[];
  body: {
    title: string;
    content: {
      text?: string;
      image?: string;
    }[];
  }[];
}

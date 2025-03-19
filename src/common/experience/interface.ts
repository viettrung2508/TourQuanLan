export enum EKeyExperienceBlog {
  blog_1 = "blog_1",
}

export type TExperienceTags = IExperienceTagItem[];

export interface IExperienceTagItem {
  id: string;
  name: string;
}


export type TExperienceBlog = IExperienceBlogItem[];

export interface IExperienceBlogItem {
  id: string;
  overview: IOverviewExperienceBlog;
  detail: IDetailExperienceBlog;
}

export interface IOverviewExperienceBlog {
  title: string;
  description: string;
  image: string;
  tagIds: IExperienceTagItem[];
}

export interface IDetailExperienceBlog {
  heading: string[];
  body: {
    title: string;
    content: {
      text?: string;
      image?: string;
    }[];
  }[];
}

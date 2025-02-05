export enum EKeyExperienceBlog {
  blog_1 = 'blog_1'
}

export type TExperienceBlog = IExperienceBlogItem[]

export interface IExperienceBlogItem {
  id: string;
  overview: IOverviewExperienceBlog,
  detail: IDetailExperienceBlog
}

export interface IOverviewExperienceBlog {}

export interface IDetailExperienceBlog {
  heading: string[];
  body: {
    title: string;
    content: {
      text?: string;
      image?: string;
    }[]
  }[]
}
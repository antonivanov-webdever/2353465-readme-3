import {PostStatus} from "./post-status.enum";

export interface Post {
  _id?: string;
  originalId?: string;
  userId: string;
  originalUserId?: string;
  tags?: string[];
  status: PostStatus;
  isRepost: boolean;
  createdAt: string;
  publishedAt: string;
}

export interface PostVideo extends Post {
  title: string;
  link: string;
}

export interface PostText extends Post {
  title: string;
  announcement: string;
  text: string;
}

export interface PostQuote extends Post {
  quote: string;
  author: string;
}

export interface PostPhoto extends Post {
  photo: string;
}

export interface PostLink extends Post {
  link: string;
  description: string;
}

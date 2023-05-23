import { PostType } from "./post-type.enum";
import {Tag} from "./tag.interface";
import {Like} from "./like.interface";

export interface BasePost {
  _id?: string;
  originalId?: string;
  userId: string;
  originalUserId?: string;
  title: string;
  type: PostType | string;
  data?: object;
  published: boolean;
  isRepost: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  tags?: number[] | Tag[];
  comments?: number[] | Comment[];
  likes?: number[] | Like[];
}

export interface PostVideo extends BasePost {
  video: string;
}

export interface PostText extends BasePost {
  announcement: string;
  text: string;
}

export interface PostQuote extends BasePost {
  quote: string;
  author: string;
}

export interface PostPhoto extends BasePost {
  photo: string;
}

export interface PostLink extends BasePost {
  link: string;
  description: string;
}

export type IPost =
  | PostVideo
  | PostText
  | PostQuote
  | PostPhoto
  | PostLink;

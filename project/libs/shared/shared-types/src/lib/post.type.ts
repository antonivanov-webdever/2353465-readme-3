import {
  PostPhoto,
  PostText,
  PostVideo,
  PostQuote,
  PostLink
} from './post.interface';

export type PostType = PostLink | PostVideo | PostQuote | PostPhoto | PostText;

import {
  BasePost,
  PostLink,
  PostPhoto,
  PostQuote,
  PostText,
  PostType,
  PostVideo,
  Tag
} from "@project/shared/shared-types";

class BasePostEntity implements BasePost {
  public _id?: string;
  public type: PostType;
  public title: string;
  public data: object;
  public userId: string;
  public published: boolean;
  public isRepost: boolean;
  public createdAt: Date;
  public updatedAt: Date;
  public tags: number[] | Tag[];

  constructor(post: BasePost) {
    this._id = post._id;
    this.title = post.title;
    this.userId = post.userId;
    this.published = post.published;
    this.createdAt = post.createdAt;
    this.updatedAt = post.updatedAt;
    this.tags = post.tags;
  }

  public toObject() {
    return {
      ...this,
      tags: { connect: this.tags.map(tag => ({ id: tag })) },
    };
  }


}

export class PostTextEntity extends BasePostEntity {
  public announcement: string;
  public text: string;

  constructor(post: PostText) {
    super(post);
    this.type = PostType.Text;
    this.data = { announcement: post.announcement, text: post.text };
  }
}

export class PostVideoEntity extends BasePostEntity {
  public video: string;

  constructor(post: PostVideo) {
    super(post);
    this.type = PostType.Video;
    this.data = { video: post.video };
  }
}

export class PostPhotoEntity extends BasePostEntity {
  public photo: string;

  constructor(post: PostPhoto) {
    super(post);
    this.type = PostType.Photo;
    this.data = { photo: post.photo };
  }
}

export class PostQuoteEntity extends BasePostEntity {
  public quote: string;
  public author: string;

  constructor(post: PostQuote) {
    super(post);
    this.type = PostType.Quote;
    this.data = { quote: post.quote, author: post.author };
  }
}

export class PostLinkEntity extends BasePostEntity {
  public link: string;
  public description: string;

  constructor(post: PostLink) {
    super(post);
    this.type = PostType.Link;
    this.data = { link: post.link, description: post.description };
  }
}

export type PostEntity =
  | PostTextEntity
  | PostPhotoEntity
  | PostVideoEntity
  | PostQuoteEntity
  | PostLinkEntity;

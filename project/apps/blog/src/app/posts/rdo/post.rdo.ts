import { BasePost, Like, PostType } from "@project/shared/shared-types";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

class BasePostRdo implements BasePost {
  @ApiProperty({ description: 'Post ID' })
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({ description: 'Original Post ID' })
  @Expose()
  public originalId: string;

  @ApiProperty({ description: 'User ID' })
  @Expose()
  public userId: string;

  @ApiProperty({ description: 'Original post user ID' })
  @Expose()
  public originalUserId: string;

  @ApiProperty({ description: 'Post title' })
  @Expose()
  public title: string;

  @ApiProperty({ description: 'Post type' })
  @Expose()
  public type: PostType;

  @ApiProperty({ description: 'Post is published' })
  @Expose()
  public published: boolean;

  @ApiProperty({ description: 'Post is reposted' })
  @Expose()
  public isRepost: boolean;

  @ApiProperty({ description: 'Post create date' })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: 'Post publish date' })
  @Expose()
  public updatedAt: Date;

  @ApiProperty({ description: 'Post comments' })
  @Expose()
  public comments: Comment[];

  @ApiProperty({ description: 'Post likes' })
  @Expose()
  public likes: Like[];

  @ApiProperty({ description: 'Post tags' })
  @Expose()
  public tags: number[];
}

export class PostVideoRdo extends BasePostRdo {
  @ApiProperty({ description: 'Video link' })
  @Expose()
  public video: string;
}

export class PostTextRdo extends BasePostRdo {
  @ApiProperty({ description: 'Announcement' })
  @Expose()
  public announcement: string;

  @ApiProperty({ description: 'Post text' })
  @Expose()
  public text: string;
}

export class PostQuoteRdo extends BasePostRdo {
  @ApiProperty({ description: 'Quote'})
  @Expose()
  public quote: string;

  @ApiProperty({ description: 'Quote\'s author' })
  @Expose()
  public author: string;
}

export class PostPhotoRdo extends BasePostRdo {
  @ApiProperty({ description: 'Photo' })
  @Expose()
  public photo: string;
}

export class PostLinkRdo extends BasePostRdo {
  @ApiProperty({ description: 'Link' })
  @Expose()
  public link: string;

  @ApiProperty({ description: 'Link description'})
  @Expose()
  public description: string;
}

export type PostRdo = PostVideoRdo | PostTextRdo | PostQuoteRdo | PostPhotoRdo | PostLinkRdo;

import { PostType } from "@project/shared/shared-types";
import { ApiProperty } from "@nestjs/swagger";

export class BasePostDto {
  @ApiProperty({ description: 'User ID', example: '04e0bf3e-f3ab-4400-8d7e-031ba0fe00ea', required: true })
  public userId: string;

  @ApiProperty({ description: 'Post title' })
  public title: string;

  @ApiProperty({ description: 'Post type' })
  public type: PostType;

  @ApiProperty({ description: 'Post tags list' })
  public tags: number[];

  @ApiProperty({ description: 'Post published' })
  public published: boolean;
}

export class CreatePostVideoDto extends BasePostDto {
  @ApiProperty({ description: 'Post video link' })
  public video: string;
}

export class CreatePostTextDto extends BasePostDto {
  @ApiProperty({ description: 'Post announcement' })
  public announcement: string;

  @ApiProperty({ description: 'Post text' })
  public text: string;
}

export class CreatePostQuoteDto extends BasePostDto {
  @ApiProperty({ description: 'Quote text' })
  public quote: string;

  @ApiProperty({ description: 'Quotes author' })
  public author: string;
}

export class CreatePostPhotoDto extends BasePostDto {
  @ApiProperty({ description: 'Post photo link' })
  public photo: string;
}

export class CreatePostLinkDto extends BasePostDto {
  @ApiProperty({ description: 'Post link' })
  public link: string;

  @ApiProperty({ description: 'Post description' })
  public description: string;
}

export type CreatePostDto =
  | CreatePostVideoDto
  | CreatePostTextDto
  | CreatePostPhotoDto
  | CreatePostQuoteDto
  | CreatePostLinkDto;

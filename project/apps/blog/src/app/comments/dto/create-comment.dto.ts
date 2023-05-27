import {ApiProperty} from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty({example: '04e0bf3e-f3ab-4400-8d7e-031ba0fe00ea', description: 'User ID'})
  public userId: string;

  @ApiProperty({example: '04e0bf3e-f3ab-4400-8d7e-031ba0fe00ea', description: 'Post ID'})
  public postId: string;

  @ApiProperty({description: 'Comment text'})
  public text: string;
}

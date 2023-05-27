import {ApiProperty} from "@nestjs/swagger";

export class CreateLikeDto {
  @ApiProperty({
    description: 'Post ID',
    example: '04e0bf3e-f3ab-4400-8d7e-031ba0fe00ea'
  })
  public postId: string;

  @ApiProperty({
    description: 'User ID',
    example: 'b7d430ca-3bc3-4f3a-b1ee-8af6a9ed84e2'
  })
  public userId: string;
}

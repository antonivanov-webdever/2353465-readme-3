import {ApiProperty} from "@nestjs/swagger";
import {Expose} from "class-transformer";

export class CommentRdo {

  @ApiProperty({
    description: 'Comment ID',
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User ID'
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Post ID'
  })
  @Expose()
  public postId: string;

  @ApiProperty({
    description: 'Comment text'
  })
  @Expose()
  public text: string;
}

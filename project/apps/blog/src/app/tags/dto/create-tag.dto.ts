import {ApiProperty} from "@nestjs/swagger";

export class CreateTagDto {

  @ApiProperty({
    description: 'Tags name'
  })
  public title: string;
}

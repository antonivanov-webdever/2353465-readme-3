import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class TagRdo {

  @ApiProperty({
    description: 'Tags ID'
  })
  @Expose({
    name: '_id'
  })
  public _id: string;

  @ApiProperty({
    description: 'Tags name'
  })
  @Expose()
  public title: string;
}

import {Body, Controller, Delete, Get, HttpStatus, Param, Post} from "@nestjs/common";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {LikesService} from "./likes.service";
import {Like} from "@project/shared/shared-types";
import {CreateLikeDto} from "./dto/create-like.dto";
import {LikeEntity} from "./likes.entity";

@ApiTags('Likes')
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Like by ID'
  })
  @Get(':id')
  public async find(@Param('id') id: string): Promise<Like | null> {
    return await this.likesService.find(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Like successfully created.'
  })
  @Post()
  public async create(@Body() likeData: CreateLikeDto): Promise<Like> {
    const likeEntity = new LikeEntity(likeData);
    return await this.likesService.create(likeEntity);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Like successfully removed.'
  })
  @Delete(':id')
  public async destroy(@Param('id') id: string) {
    await this.likesService.destroy(id)
  }
}

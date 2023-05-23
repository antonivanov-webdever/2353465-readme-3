import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import {PostsService} from "./posts.service";
import {
  CreatePostDto,
  CreatePostLinkDto,
  CreatePostPhotoDto,
  CreatePostQuoteDto,
  CreatePostTextDto,
  CreatePostVideoDto
} from "./dto/create-post.dto";
import {ApiBody, ApiExtraModels, ApiResponse, ApiTags, getSchemaPath} from "@nestjs/swagger";

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All Posts',
  })
  @Get()
  public async findAll() {
    return await this.postsService.findAll();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post by ID',
  })
  @Get(':id')
  public async find(
    @Param('id') id: string
  ) {
    return await this.postsService.find(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new post has been successfully created.'
  })
  @ApiExtraModels(CreatePostVideoDto, CreatePostTextDto, CreatePostQuoteDto, CreatePostPhotoDto, CreatePostLinkDto)
  @ApiBody({
    schema: {
      anyOf: [
        {
          $ref: getSchemaPath(CreatePostVideoDto),
        },
        {
          $ref: getSchemaPath(CreatePostTextDto)
        },
        {
          $ref: getSchemaPath(CreatePostQuoteDto)
        },
        {
          $ref: getSchemaPath(CreatePostPhotoDto)
        },
        {
          $ref: getSchemaPath(CreatePostLinkDto)
        }
      ]
    },
  })
  @Post()
  public async create(
    @Body() postData: CreatePostDto,
  ) {
    return await this.postsService.create(postData);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully updated.'
  })
  @ApiExtraModels(CreatePostVideoDto, CreatePostTextDto, CreatePostQuoteDto, CreatePostPhotoDto, CreatePostLinkDto)
  @ApiBody({
    schema: {
      anyOf: [
        {
          $ref: getSchemaPath(CreatePostVideoDto),
        },
        {
          $ref: getSchemaPath(CreatePostTextDto)
        },
        {
          $ref: getSchemaPath(CreatePostQuoteDto)
        },
        {
          $ref: getSchemaPath(CreatePostPhotoDto)
        },
        {
          $ref: getSchemaPath(CreatePostLinkDto)
        }
      ]
    },
  })
  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() postData: CreatePostDto
  ) {
    return await this.postsService.update(id, postData);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully removed.'
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(
    @Param('id') id: string
  ) {
    await this.postsService.destroy(id);
  }
}

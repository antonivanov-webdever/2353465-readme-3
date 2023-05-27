import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put} from "@nestjs/common";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CommentsService} from "./comments.service";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {CommentRdo} from "./rdo/comment.rdo";

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: 'List of comments.',
  })
  @Get()
  public async findAll() {
    return await this.commentsService.findAll();
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: 'Comment by ID',
  })
  @Get(':id')
  public async find(@Param('id') id: string) {
    return await this.commentsService.find(id);
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.CREATED,
    description: 'Comment successfully created.',
  })
  @Post()
  public async create(@Body() commentData: CreateCommentDto) {
    return await this.commentsService.create(commentData);
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.CREATED,
    description: 'Comment successfully updated.',
  })
  @Put(':id')
  public async update(@Param('id') id: string, @Body() commentData: CreateCommentDto) {
    return this.commentsService.update(id, commentData);
  }


  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment successfully removed.',
  })
  @Delete(':id')
  public async destroy(@Param('id') id: string) {
    await this.commentsService.destroy(id);
  }
}

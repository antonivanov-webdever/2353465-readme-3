import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { TagsService } from "./tags.service";
import { CreateTagDto } from "./dto/create-tag.dto";

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of tags.'
  })
  @Get()
  public async findAll() {
    return this.tagsService.findAll();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Tag by ID.'
  })
  @Get(':id')
  public async find(@Param('id') id: string) {
    return await this.tagsService.find(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Tag successfully created.'
  })
  @Post()
  public async create(@Body() tagData: CreateTagDto) {
    return await this.tagsService.create(tagData);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Tag successfully updated.'
  })
  @Put(':id')
  public async update(@Param('id') id: string, @Body() tagData: CreateTagDto) {
    return await this.tagsService.update(id, tagData);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Tag successfully removed.'
  })
  @Delete(':id')
  public async destroy(@Param('id') id: string) {
    await this.tagsService.destroy(id);
  }
}

import { Module } from "@nestjs/common";
import { TagsController } from "./tags.controller";
import { TagsService } from "./tags.service";
import { TagsMemoryRepository } from "./tags-memory.repository";

@Module({
  imports: [],
  controllers: [TagsController],
  providers: [TagsService, TagsMemoryRepository]
})
export class TagsModule {}

import {Module} from "@nestjs/common";
import {LikesController} from "./likes.controller";
import {LikesService} from "./likes.service";
import {LikesMemoryRepository} from "./likes-memory.repository";

@Module({
  imports: [],
  controllers: [LikesController],
  providers: [LikesService, LikesMemoryRepository],
})
export class LikesModule {}

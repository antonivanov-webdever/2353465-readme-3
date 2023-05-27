import {Injectable} from "@nestjs/common";
import {LikesMemoryRepository} from "./likes-memory.repository";
import {Like} from "@project/shared/shared-types";
import {LikeEntity} from "./likes.entity";
import {CreateLikeDto} from "./dto/create-like.dto";

@Injectable()
export class LikesService {
  constructor(
    private readonly likesMemoryRepository: LikesMemoryRepository
  ) {}

  public async find(id: string): Promise<Like | null> {
    return await this.likesMemoryRepository.findById(id);
  }

  public async create(likeData: CreateLikeDto): Promise<Like> {
    const likeEntity = new LikeEntity(likeData);
    return await this.likesMemoryRepository.create(likeEntity);
  }

  public async destroy(id: string) {
    await this.likesMemoryRepository.destroy(id);
  }
}

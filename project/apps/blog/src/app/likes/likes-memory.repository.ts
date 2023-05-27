import {Injectable} from "@nestjs/common";
import {LikeEntity} from "./likes.entity";
import {Like} from "@project/shared/shared-types";
import crypto from "crypto";

@Injectable()
export class LikesMemoryRepository {
  private repository: {[key: string]: Like} = {}

  public async findById(id: string): Promise<Like | null> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async create(like: LikeEntity): Promise<Like> {
    if (like) {
      const entry = {...like.toObject(), _id: crypto.randomUUID()}
      this.repository[entry._id] = entry;

      return entry;
    } else {
      console.log('like:', like);
    }
  }

  public async destroy(id: string): Promise<void> {
    if (this.repository[id]) {
      delete this.repository[id];
    }
  }
}

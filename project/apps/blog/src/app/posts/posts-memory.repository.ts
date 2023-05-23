import {Injectable} from "@nestjs/common";
import {CRUDRepository} from "@project/util/util-types";
import {PostEntity} from "./posts.entity";
import {IPost} from "@project/shared/shared-types";
import crypto from "crypto";


@Injectable()
export class PostsMemoryRepository implements CRUDRepository<PostEntity, string, IPost> {
  private repository: {[key: string]: IPost} = {};

  public async findAll(): Promise<IPost[] | null> {
    if (this.repository) {
      return Object.values(this.repository);
    }

    return null;
  }

  public async findById(id: string): Promise<IPost | null> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async create(item: PostEntity): Promise<IPost | null> {
    if (item) {
      const entry = {...item.toObject(), _id: crypto.randomUUID()};
      this.repository[entry._id] = entry;
      return entry;
    } else {
      console.log('post:', item);
    }

    return null;
  }

  public async update(id: string, item: PostEntity): Promise<IPost | null> {
    if (this.repository[id]) {
      this.repository[id] = {...item.toObject(), _id: id};

      return {...this.repository[id]}
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    if (this.repository[id]) {
      delete this.repository[id];
    }
  }
}

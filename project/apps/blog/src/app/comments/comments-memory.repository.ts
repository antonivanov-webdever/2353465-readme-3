import {Injectable} from "@nestjs/common";
import {CRUDRepository} from "@project/util/util-types";
import {CommentEntity} from "./comments.entity";
import {Comment} from "@project/shared/shared-types";
import crypto from "crypto";

@Injectable()
export class CommentsMemoryRepository implements CRUDRepository<CommentEntity, string, Comment> {
  private repository: {[key: string]: Comment} = {}

  public async findAll(): Promise<Comment[] | null> {
    if (this.repository) {
      return Object.values(this.repository);
    }

    return null;
  }

  public async findById(id: string): Promise<Comment | null> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async create(comment: CommentEntity): Promise<Comment> {
    if (comment) {
      const entry = {...comment.toObject(), _id: crypto.randomUUID()}
      this.repository[entry._id] = entry;

      return entry;
    } else {
      console.log('comment:', comment);
    }
  }

  public async update(id: string, comment: CommentEntity): Promise<Comment | null> {
    if (this.repository[id]) {
      this.repository[id] = {...comment.toObject(), _id: id};

      return {...this.repository[id]};
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    if (this.repository[id]) {
      delete this.repository[id];
    }
  }
}

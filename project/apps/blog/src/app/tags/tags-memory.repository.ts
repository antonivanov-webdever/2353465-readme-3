import {Injectable} from "@nestjs/common";
import {CRUDRepository} from "@project/util/util-types";
import {Tag} from "@project/shared/shared-types";
import {TagsEntity} from "./tags.entity";
import crypto from "crypto";

@Injectable()
export class TagsMemoryRepository implements CRUDRepository<TagsEntity, string, Tag> {
  private repository: {[key: string]: Tag} = {}

  public async findAll() {
    return Object.values(this.repository);
  }

  public async findById(id: string): Promise<Tag | null> {
    if (this.repository[id]) {
      return this.repository[id];
    }

    return null;
  }

  public async create(tagData: TagsEntity): Promise<Tag> {
    if (tagData) {
      const entry = { ...tagData.toObject(), _id: crypto.randomUUID() };
      this.repository[entry._id] = entry;

      return entry;
    }
  }

  public async update(id: string, tagData: TagsEntity): Promise<Tag | null> {
    if (this.repository[id]) {
      const entry = {...tagData.toObject(), _id: id};
      this.repository[id] = entry;

      return entry;
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    if (this.repository[id]) {
      delete this.repository[id];
    }
  }
}

import {Injectable} from "@nestjs/common";
import {TagsMemoryRepository} from "./tags-memory.repository";
import {Tag} from "@project/shared/shared-types";
import {CreateTagDto} from "./dto/create-tag.dto";
import {TagsEntity} from "./tags.entity";
import {fillObject} from "@project/util/util-core";
import {TagRdo} from "./rdo/tag.rdo";

@Injectable()
export class TagsService {
  constructor(private readonly tagsMemoryRepository: TagsMemoryRepository) {}

  public async findAll(): Promise<Tag[] | []> {
    const tags = await this.tagsMemoryRepository.findAll();

    return tags.map((tag) => fillObject(TagRdo, tag))
  }

  public async find(id: string): Promise<Tag | null> {
    const tag = await this.tagsMemoryRepository.findById(id);
    return fillObject(TagRdo, tag);
  }

  public async create(tagData: CreateTagDto): Promise<Tag> {
    const entity = new TagsEntity(tagData);
    const tag = await this.tagsMemoryRepository.create(entity);

    return fillObject(TagRdo, tag);
  }

  public async update(id: string, tagData: CreateTagDto): Promise<Tag | null> {
    const entity = new TagsEntity(tagData);
    const tag = await this.tagsMemoryRepository.update(id, entity);

    return fillObject(TagRdo, tag);
  }

  public async destroy(id: string): Promise<void> {
    await this.tagsMemoryRepository.destroy(id);
  }
}

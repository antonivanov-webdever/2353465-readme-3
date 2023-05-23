import { Injectable } from "@nestjs/common";
import { PostsMemoryRepository } from "./posts-memory.repository";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsFactory } from "./posts.factory";
import { IPost } from "@project/shared/shared-types";
import dayjs from "dayjs";

@Injectable()
export class PostsService {
  constructor(private readonly postsMemoryRepository: PostsMemoryRepository) {}

  public async create(postData: CreatePostDto): Promise<IPost> {
    const postFactory = new PostsFactory();
    const entity = postFactory.getEntity(postData);
    entity.createdAt = dayjs().toDate();
    entity.updatedAt = dayjs().toDate();
    const post = await this.postsMemoryRepository.create(entity);

    return postFactory.getRDO(post);
  }

  public async update(id: string, postData: CreatePostDto): Promise<IPost | null> {
    const postFactory = new PostsFactory();
    const entity = postFactory.getEntity(postData);
    entity.updatedAt = dayjs().toDate();
    const post = await this.postsMemoryRepository.update(id, entity);

    return postFactory.getRDO(post);
  }

  public async find(id: string): Promise<IPost | null> {
    const post = await this.postsMemoryRepository.findById(id);
    const postFactory = new PostsFactory();

    return postFactory.getRDO(post);
  }

  public async findAll(): Promise<IPost[] | null> {
    const posts = await this.postsMemoryRepository.findAll();
    return posts.map((post) => {
      const postFactory = new PostsFactory();

      return postFactory.getRDO(post);
    })
  }

  public async destroy(id: string): Promise<void> {
    await this.postsMemoryRepository.destroy(id);
  }
}

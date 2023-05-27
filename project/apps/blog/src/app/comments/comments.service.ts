import {Injectable} from "@nestjs/common";
import {CommentsMemoryRepository} from "./comments-memory.repository";
import {Comment} from "@project/shared/shared-types";
import {fillObject} from "@project/util/util-core";
import {CommentRdo} from "./rdo/comment.rdo";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {CommentEntity} from "./comments.entity";

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsMemoryRepository: CommentsMemoryRepository
  ) {}

  public async findAll(): Promise<Comment[] | null> {
    const comments = await this.commentsMemoryRepository.findAll();

    return comments.map((comment) => fillObject(CommentRdo, comment));
  }

  public async find(id: string): Promise<Comment| null> {
    const comment = await this.commentsMemoryRepository.findById(id);

    return fillObject(CommentRdo, comment);
  }

  public async create(commentData: CreateCommentDto): Promise<Comment> {
    const commentEntity = new CommentEntity(commentData);
    const comment = await this.commentsMemoryRepository.create(commentEntity);

    return fillObject(CommentRdo, comment);
  }

  public async update(id: string, commentData: CreateCommentDto): Promise<Comment | null> {
    const commentEntity = new CommentEntity(commentData);
    const comment = await this.commentsMemoryRepository.update(id, commentEntity);

    return fillObject(CommentRdo, comment);
  }

  public async destroy(id: string) {
    await this.commentsMemoryRepository.destroy(id);
  }
}

import { Comment } from "@project/shared/shared-types";
import dayjs from "dayjs";

export class CommentEntity {
  public _id?: string;
  public userId: string;
  public postId: string;
  public text: string;
  public createdAt: number;

  constructor(comment: Comment) {
    this.userId = comment.userId;
    this.postId = comment.postId;
    this.text = comment.text;
    this.createdAt = dayjs().unix();
  }

  public toObject() {
    return {
      ...this,
    }
  }
}

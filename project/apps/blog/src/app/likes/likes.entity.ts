import {Like} from "@project/shared/shared-types";

export class LikeEntity implements Like {
  public _id?: string;
  public postId: string;
  public userId: string;

  constructor(like: Like) {
    this._id = like._id;
    this.postId = like.postId;
    this.userId = like.userId;
  }

  public toObject() {
    return {
      ...this
    }
  }
}

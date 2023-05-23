import { PostType } from "@project/shared/shared-types";
import { PostLinkEntity, PostPhotoEntity, PostQuoteEntity, PostTextEntity, PostVideoEntity } from "./posts.entity";
import { PostLinkRdo, PostPhotoRdo, PostQuoteRdo, PostTextRdo, PostVideoRdo } from "./rdo/post.rdo";
import { fillObject } from "@project/util/util-core";

export class PostsFactory {
  public getEntity(post) {
    switch (post.type) {
      case PostType.Video:
        return new PostVideoEntity(post);
      case PostType.Text:
        return new PostTextEntity(post);
      case PostType.Quote:
        return new PostQuoteEntity(post);
      case PostType.Photo:
        return new PostPhotoEntity(post);
      case PostType.Link:
        return new PostLinkEntity(post);
      default:
        console.log(`Entity for this type did not found. Please add entity for type: ${post.type}`);
    }
  }

  public getRDO(postData) {
    const post = { ...postData, ...postData.data };

    switch (post.type) {
      case PostType.Video:
        return fillObject(PostVideoRdo, post);
      case PostType.Text:
        return fillObject(PostTextRdo, post);
      case PostType.Quote:
        return fillObject(PostQuoteRdo, post);
      case PostType.Photo:
        return fillObject(PostPhotoRdo, post);
      case PostType.Link:
        return fillObject(PostLinkRdo, post);
      default:
        console.log(`RDO for this type did not found. Please add RDO for type: ${post.type}`);
    }

  }
}

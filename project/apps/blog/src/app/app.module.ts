import { Module } from '@nestjs/common';
import { PostsModule } from "./posts/posts.module";
import { CommentsModule } from "./comments/comments.module";
import { LikesModule } from "./likes/likes.module";
import { TagsModule } from "./tags/tags.module";

@Module({
  imports: [PostsModule, CommentsModule, LikesModule, TagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

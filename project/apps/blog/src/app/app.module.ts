import { Module } from '@nestjs/common';
import { PostsModule } from "./posts/posts.module";
import { CommentsModule } from "./comments/comments.module";
import { LikesModule } from "./likes/likes.module";

@Module({
  imports: [PostsModule, CommentsModule, LikesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

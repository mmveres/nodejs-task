import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from "./post.entity";
import * as uuid from "uuid";

const posts: PostEntity[] = [];

class PostsRepository {
  create(dto: CreatePostDto) {
    const post: PostEntity = { id: uuid.v4(), ...dto };
    posts.push(post);

    return post;
  }
}

export const postsRepository = new PostsRepository();

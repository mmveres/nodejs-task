import { Router } from "express";
import { validateReq } from "src/shared/middlewares/validate";
import { serialize } from "src/shared/serializer";
import { CreatePostDto } from "./dto/create-post.dto";
import { postsService } from "./posts.service";
import { PostSerializer } from "./serializers/post.serializer";

const router = Router();

router.post("/", validateReq(CreatePostDto), (req, res) => {
  const post = postsService.createPost(req.body);
  res.status(201).send(serialize(PostSerializer, post));
});

export const postsController = router;

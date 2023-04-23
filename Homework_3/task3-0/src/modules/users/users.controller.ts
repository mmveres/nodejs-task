import { Router } from "express";
import { validateReq } from "src/shared/middlewares/validate";
import { serialize } from "src/shared/serializer";
import { CreateUserDto } from "./dto/create-user.dto";
import { usersService } from "./users.service";
import { UserSerializer } from "./serializers/user.serializer";

const router = Router();

router.post("/", validateReq(CreateUserDto), (req, res) => {
  const user = usersService.createPost(req.body);
  res.status(201).send(serialize(UserSerializer, user));
});

router.get('/', (req, res) => {
  const users = usersService.getUsers();
  if (!users) {
    res.status(404).send('Users not found');
    return;
  }
  res.status(201).send(serialize(UserSerializer, users));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = usersService.getUserById(id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  res.status(201).send(serialize(UserSerializer, user));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const user = usersService.createPost(req.body);
  if (!user) {
    res.status(400).send('User data is required');
    return;
  }
  if (!user.name) {
    res.status(400).send('User Name is required');
    return;
  }
  if (!user.email) {
    res.status(400).send('User email is required');
    return;
  }
  if (!user.gender) {
    res.status(400).send('User gender is required');
    return;
  }
  if (!user.avatar_url) {
    res.status(400).send('User avatar_url is required');
    return;
  }
  const result = usersService.putUserById(id, user);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  res.status(201).send(serialize(UserSerializer, result));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = usersService.deleteUserById(id);
  if (index === -1) {
    res.status(404).send('User not found');
    return;
  }
  res.send({ message: 'User deleted' });
});

export const usersController = router;

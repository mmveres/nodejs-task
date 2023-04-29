import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import * as uuid from "uuid";

const users: UserEntity[] = [];

class UsersRepository {
  create(dto: CreateUserDto) {
    const user: UserEntity = { id: uuid.v4(), ...dto };
    users.push(user);

    return user;
  }

  getUsers() {
    return users
  };

  getUserById(id: string): UserEntity | undefined {
    return users.find(u => u.id === id);
  };

  putUserById(id: string, dto: CreateUserDto): UserEntity | undefined {
    const user = users.find(u => u.id === id);
    if (user !== undefined) {
      user.name = dto.name;
      user.email = dto.email;
      user.avatar_url = dto.avatar_url;
    }
    return user;
  };

  deleteUserById(id: string) {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
    }
    return index
  };
}

export const usersRepository = new UsersRepository();

import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import { usersRepository } from "./users.repository";

class UsersService {
  createPost(dto: CreateUserDto): UserEntity {
    return usersRepository.create(dto);
  }
  getUsers(): UserEntity[] {
    return usersRepository.getUsers();
  };

  getUserById(id: string): UserEntity | undefined {
    return usersRepository.getUserById(id);
  };

  putUserById(id: string, dto: CreateUserDto): UserEntity | undefined {
    return usersRepository.putUserById(id, dto);
  };

  deleteUserById(id: string) {
    return usersRepository.deleteUserById(id);
  };
}

export const usersService = new UsersService();

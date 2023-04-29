import { IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(5, 255)
  name = "";

  @IsString()
  @Length(5, 255)
  email = "";

  @IsString()
  @Length(5, 255)
  gender = "";

  @IsString()
  @Length(5, 255)
  avatar_url = "";
}

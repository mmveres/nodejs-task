import { IsString, Length } from "class-validator";

export class CreatePostDto {
  @IsString()
  @Length(5, 255)
  title = "";

  @IsString()
  @Length(10, 5000)
  content = "";
}

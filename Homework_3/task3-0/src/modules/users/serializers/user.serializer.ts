import { Expose } from "class-transformer";

export class UserSerializer {
  @Expose()
  id = "";

  @Expose()
  name = "";
  @Expose()
  email = "";
  @Expose()
  gender = "";
  @Expose()
  avatar_url = "";
}

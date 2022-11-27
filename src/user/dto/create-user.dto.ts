import { IsString, MinLength } from "class-validator"

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  username: string

  @IsString()
  @MinLength(8)
  password: string
}

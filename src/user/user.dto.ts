import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}

export class UpdateUserDto {
  @IsEmail()
  email?: string;

  @MinLength(8)
  password?: string;

  firstName?: string;
  lastName?: string;
}

import { IsEmail, IsOptional, IsString } from 'class-validator';

export class RegisterUserDto {

  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}

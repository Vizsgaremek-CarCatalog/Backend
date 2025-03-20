import { IsEmail, IsEnum, IsOptional, IsString, IsStrongPassword } from 'class-validator';


export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsEnum(['USER', 'ADMIN'])
  role: 'USER' | 'ADMIN';

  @IsOptional()
  @IsString()
  adminPassword?: string;  // Optional admin password
}
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString, IsStrongPassword } from 'class-validator';


export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    example:"user@gmail.com"
  })
  email: string;

  @IsStrongPassword()
  @ApiProperty({
    example:"ASDasd123.#"
  })
  password: string;

  @ApiProperty({
    example:'USER'
  })
  @IsEnum(['USER', 'ADMIN'])
  role: 'USER' | 'ADMIN';

  @IsOptional()
  @IsString()
  @ApiProperty({
    example:"It is a secret"
  })
  adminPassword?: string;  // Optional admin password
}
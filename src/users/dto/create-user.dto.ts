import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsInt, IsOptional, IsString, IsStrongPassword } from 'class-validator';


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
export class AddFavoriteDto {
  @IsInt()
  @ApiProperty({
 
    example: 42,
  })
  carId: number;
}
export class ChangePasswordDto {
  @IsString()
  @ApiProperty({
   
    example: 'OldPassword123!'
  })
  currentPassword: string;

  @IsString()
  @ApiProperty({
  
    example: 'NewStrongPassword123#'
  })
  newPassword: string;

  @IsString()
  @ApiProperty({
   
    example: 'NewStrongPassword123#'
  })
  confirmPassword: string;
}
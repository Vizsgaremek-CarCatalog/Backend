import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
@ApiBearerAuth()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 
   /**
   * The authentication of the user/admin
   * 
   * @returns JSON response
   */
  @Post('login')

   @ApiResponse({ status: 200, description: 'authentication was succesful' })
   @ApiBadRequestResponse({ description: 'The authentication was unsuccesful' })
  async login(@Body() loginData: LoginDto) {
    try {
      // A login függvény visszaadja a token-t, userId-t és role-t is
      const { token,  role, userid } = await this.authService.login(loginData);
      return { token,  role ,userid }; // Visszaküldjük a válaszban a role-t is
    } catch {
      throw new UnauthorizedException("Hibás email vagy jelszó");
    }
  }
}

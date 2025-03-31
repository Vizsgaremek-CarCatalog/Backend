import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    try {
      // A login függvény visszaadja a token-t, userId-t és role-t is
      const { token,  role,userid } = await this.authService.login(loginData);
      return { token,  role ,userid }; // Visszaküldjük a válaszban a role-t is
    } catch {
      throw new UnauthorizedException("Hibás email vagy jelszó");
    }
  }
}

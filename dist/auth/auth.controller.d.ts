import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginData: LoginDto): Promise<{
        token: string;
        role: import(".prisma/client").$Enums.Role;
        userid: number;
    }>;
}

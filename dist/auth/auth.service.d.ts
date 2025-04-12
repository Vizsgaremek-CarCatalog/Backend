import { LoginDto } from './login.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AuthService {
    private readonly db;
    constructor(db: PrismaService);
    login(loginData: LoginDto): Promise<{
        token: string;
        userid: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
}

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
export declare class UsersService {
    private readonly db;
    private readonly configService;
    constructor(db: PrismaService, configService: ConfigService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    remove(id: number): Promise<boolean>;
    getUserByToken(token: string): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}

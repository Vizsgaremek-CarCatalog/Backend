import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
import { cars, Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    private readonly db;
    private readonly configService;
    constructor(prisma: PrismaService, db: PrismaService, configService: ConfigService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    findOne(id: number): Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getUserByToken(token: string): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getUserFavorites(userId: number): Promise<cars[]>;
    addFavorite(userId: number, carId: number): Promise<cars>;
    removeFavorite(userId: number, carId: number): Promise<void>;
    changePassword(userId: number, currentPassword: string, newPassword: string, confirmPassword: string): Promise<boolean>;
}

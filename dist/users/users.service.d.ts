import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
export declare class UsersService {
    private readonly db;
    constructor(db: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        email: string;
        password: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    remove(id: number): Promise<boolean>;
    getUserByToken(token: string): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
}

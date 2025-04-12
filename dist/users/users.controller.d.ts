import { UsersService } from './users.service';
import { AddFavoriteDto, ChangePasswordDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { cars } from '@prisma/client';
import { CarcatalogService } from 'src/carcatalog/carcatalog.service';
export declare class UsersController {
    private readonly usersService;
    private readonly carService;
    constructor(usersService: UsersService, carService: CarcatalogService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll(req: any): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    remove(id: string): string;
    getFavorites(userId: string): Promise<cars[]>;
    addFavorite(userId: string, addFavoriteDto: AddFavoriteDto): Promise<cars>;
    removeFavorite(userId: string, carId: string): Promise<{
        message: string;
    }>;
    changePassword(userId: string, changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}

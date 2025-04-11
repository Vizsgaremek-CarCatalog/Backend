import { CreateCarcatalogDto } from './dto/create-carcatalog.dto';
import { UpdateCarcatalogDto } from './dto/update-carcatalog.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CarcatalogService {
    private readonly db;
    constructor(db: PrismaService);
    create(createCarcatalogDto: CreateCarcatalogDto): import(".prisma/client").Prisma.Prisma__carsClient<{
        vehicle: string;
        type: string;
        description: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        price: number;
        yearMade: number;
        horsePower: number;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        vehicle: string;
        type: string;
        description: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        price: number;
        yearMade: number;
        horsePower: number;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        vehicle: string;
        type: string;
        description: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        price: number;
        yearMade: number;
        horsePower: number;
        id: number;
    }>;
    update(id: number, updateCarcatalogDto: UpdateCarcatalogDto): Promise<{
        vehicle: string;
        type: string;
        description: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        price: number;
        yearMade: number;
        horsePower: number;
        id: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

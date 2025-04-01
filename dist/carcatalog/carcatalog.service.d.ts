import { CreateCarcatalogDto } from './dto/create-carcatalog.dto';
import { UpdateCarcatalogDto } from './dto/update-carcatalog.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CarcatalogService {
    private readonly db;
    constructor(db: PrismaService);
    create(createCarcatalogDto: CreateCarcatalogDto): import(".prisma/client").Prisma.Prisma__carsClient<{
        id: number;
        vehicle: string;
        type: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        price: number;
        description: string;
        yearMade: number;
        horsePower: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        vehicle: string;
        type: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        price: number;
        description: string;
        yearMade: number;
        horsePower: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__carsClient<{
        id: number;
        vehicle: string;
        type: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        price: number;
        description: string;
        yearMade: number;
        horsePower: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateCarcatalogDto: UpdateCarcatalogDto): Promise<{
        id: number;
        vehicle: string;
        type: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        price: number;
        description: string;
        yearMade: number;
        horsePower: number;
    }>;
    remove(id: number): Promise<boolean>;
}

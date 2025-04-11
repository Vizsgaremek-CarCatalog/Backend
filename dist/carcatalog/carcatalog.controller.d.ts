import { CarcatalogService } from './carcatalog.service';
import { CreateCarcatalogDto } from './dto/create-carcatalog.dto';
import { UpdateCarcatalogDto } from './dto/update-carcatalog.dto';
export declare class CarcatalogController {
    private readonly carcatalogService;
    constructor(carcatalogService: CarcatalogService);
    private static storage;
    create(createCarcatalogDto: CreateCarcatalogDto, file: Express.Multer.File): import(".prisma/client").Prisma.Prisma__carsClient<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCarcatalogDto: UpdateCarcatalogDto): Promise<{
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
    remove(id: string): Promise<{
        message: string;
    }>;
}

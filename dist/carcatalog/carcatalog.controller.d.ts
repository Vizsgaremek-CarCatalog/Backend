import { CarcatalogService } from './carcatalog.service';
import { CreateCarcatalogDto } from './dto/create-carcatalog.dto';
import { UpdateCarcatalogDto } from './dto/update-carcatalog.dto';
export declare class CarcatalogController {
    private readonly carcatalogService;
    constructor(carcatalogService: CarcatalogService);
    private static storage;
    create(createCarcatalogDto: CreateCarcatalogDto, file: Express.Multer.File): import(".prisma/client").Prisma.Prisma__carsClient<{
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__carsClient<{
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
    update(id: string, updateCarcatalogDto: UpdateCarcatalogDto): Promise<{
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
    remove(id: string): Promise<boolean>;
}

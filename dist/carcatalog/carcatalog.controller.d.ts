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
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        vehicle: string;
        type: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        id: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__carsClient<{
        vehicle: string;
        type: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateCarcatalogDto: UpdateCarcatalogDto): Promise<{
        vehicle: string;
        type: string;
        color: string;
        fuel: string;
        manufacturer: string;
        mass: number;
        imageUrl: string | null;
        id: number;
    }>;
    remove(id: string): Promise<boolean>;
}

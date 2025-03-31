import { CreateCarcatalogDto } from './create-carcatalog.dto';
declare const UpdateCarcatalogDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCarcatalogDto>>;
export declare class UpdateCarcatalogDto extends UpdateCarcatalogDto_base {
    vehicle: string;
    type: string;
    color: string;
    fuel: string;
    manufacturer: string;
    mass: number;
    imageUrl?: string;
    price: number;
    description: string;
    yearMade: number;
    horsePower: number;
}
export {};

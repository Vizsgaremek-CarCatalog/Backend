import { PartialType } from '@nestjs/mapped-types';
import { CreateCarcatalogDto } from './create-carcatalog.dto';
import {IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarcatalogDto extends PartialType(CreateCarcatalogDto) {
       
        @IsOptional()
        @IsString()
        @ApiProperty({
            example: "Mazda"
        })
        vehicle:string
        
        @IsOptional()
        @IsString()
        @ApiProperty({
            example: "SUV"
        })
        type:string
        
        @IsOptional()
        @IsString()
        @ApiProperty({
            example: "red"
        })
        color:string
    
        @IsOptional()
        @IsString()
        @ApiProperty({
            example: "gasoline"
        })
        fuel:string
    
        @IsOptional()
        @IsString()
        @ApiProperty({
            example: "Kia"
        })
        manufacturer:string
        
        @IsOptional()
        @IsString()
        @ApiProperty({
            example: 1500
        })
        mass:number
        
        @IsOptional()
        imageUrl?: string;
}

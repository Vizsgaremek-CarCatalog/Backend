import { PartialType } from '@nestjs/mapped-types';
import { CreateCarcatalogDto } from './create-carcatalog.dto';
import {IsDateString, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
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
        @IsInt()
        @ApiProperty({
            example: 1500
        })
        mass:number
        
        @IsOptional()
        imageUrl?: string;

          
        @IsOptional()
        @IsInt()
        @ApiProperty({
            example: 150000
        })
        price:number

        @IsOptional()
        @IsString()
        @ApiProperty({
            example: "Very good car"
        })
        description:string

        @IsDateString()
        @IsOptional()
        @ApiProperty({
            example: "2015"
        })
        yearMade: Date

        @IsOptional()
        @IsInt()
        @ApiProperty({
            example: 400
        })
        horsePower: number
}

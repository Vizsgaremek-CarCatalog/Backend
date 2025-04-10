import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

/**
 * The data required to create a new car
 */
export class CreateCarcatalogDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "Mazda" })
  vehicle: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "SUV" })
  type: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "red" })
  color: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "gasoline" })
  fuel: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "Kia" })
  manufacturer: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @ApiProperty({ example: 1500 })
  mass: number;

  @IsOptional()
  imageUrl?: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @ApiProperty({ example: 15000 })
  price: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "Very good car" })
  description: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)//a flashpost miatt muszáj transzofrmáljam számmá mert különben nem müködik a lekérdezés
  @ApiProperty({ example: 2015 })
  yearMade: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @ApiProperty({ example: 400 })
  horsePower: number;
}
    import { ApiProperty } from "@nestjs/swagger";
    import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

    /**
     * The data required to create a new car
     */
    export class CreateCarcatalogDto {

        @IsNotEmpty()
        @IsString()
        @ApiProperty({
            example: "Mazda"
        })
        vehicle: string

        @IsNotEmpty()
        @IsString()
        @ApiProperty({
            example: "SUV"
        })
        type: string

        @IsNotEmpty()
        @IsString()
        @ApiProperty({
            example: "red"
        })
        color: string

        @IsNotEmpty()
        @IsString()
        @ApiProperty({
            example: "gasoline"
        })
        fuel: string

        @IsNotEmpty()
        @IsString()
        @ApiProperty({
            example: "Kia"
        })
        manufacturer: string

        @IsNotEmpty()
        @IsInt()
        @ApiProperty({
            example: 1500
        })
        mass: number

        @IsOptional()
        imageUrl?: string

<<<<<<< HEAD
    @IsNotEmpty()
    @IsInt()
    @ApiProperty({
        example: 15000
    })
    price: number
=======
        @IsNotEmpty()
        @IsInt()
        @ApiProperty({
            example: 1500
        })
        price: number
>>>>>>> 0666dfcef985b58cbcd22fc66eed45f8d54187af

        @IsOptional()
        @IsString()
        @ApiProperty({
            example: "Very good car"
        })
        description: string

        @IsInt()
        @IsOptional()
        @ApiProperty({
            example: "2015"
        })
        yearMade: number

        @IsOptional()
        @IsInt()
        @ApiProperty({
            example: 400
        })
        horsePower: number
    }
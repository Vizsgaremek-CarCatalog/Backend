import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

   /**
    * The data required to create a new car
    */
export class CreateCarcatalogDto {

   @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "Mazda"
    })
    vehicle:string
    
   @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "SUV"
    })
    type:string
    
   @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "red"
    })
    color:string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "gasoline"
    })
    fuel:string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "Kia"
    })
    manufacturer:string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "1500"
    })
    mass:number
}

import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDto {
    @IsNotEmpty()
    @IsInt()
    @ApiProperty({
        example:1
    })
    carId: number;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example:"Nagyon jó autó szeretem"
    })
    text: string;
}

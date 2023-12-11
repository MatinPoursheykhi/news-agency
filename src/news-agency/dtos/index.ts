// the purpose of this module is to define structures which have called DTO
// to use these structures to validate body or params inside the incoming request

// class-validator help to validate the property of DTOs more efficient
import { IsNotEmpty, IsString } from "class-validator";

export class InsertNewsAgencyDTO {
    @IsNotEmpty()
    @IsString()
    title: string
    @IsString()
    text: string
    @IsString()
    agencyName: string
}

export class UpdateNewsAgencyDTO {
    @IsNotEmpty()
    @IsString()
    title: string
    @IsString()
    text: string
}
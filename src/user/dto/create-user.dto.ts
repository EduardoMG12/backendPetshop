import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { IsCPF } from '../../validator/cpf-validator';
export class CreateUserDto {}

export class UserCreateDto {

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;
 
    @IsDateString()
    @IsNotEmpty()
    birthDate: Date;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsCPF()
    cpf:string

    @IsString()
    @MinLength(8)
    @MaxLength(127)
    password: string;

  }
  
import { IsNotEmpty, Length } from "class-validator";
import { IsEmail } from 'class-validator';
import { Transform } from 'class-transformer';

export class createQuizDto{

    @IsNotEmpty({message: 'Must be required username'})
    @Length(3,10)
    username : string;


    @IsNotEmpty({message: 'Must required Email Address'})
    @IsEmail()
    @Transform(({ value }) => value.trim())
    email : string;

}
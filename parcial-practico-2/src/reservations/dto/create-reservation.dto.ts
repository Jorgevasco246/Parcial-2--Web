import { IsInt, IsNotEmpty, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateReservationDto {
  // TODO 1: Add the validators required by the examination. Do not convert body numbers.
  @IsInt()
  @IsNotEmpty()
  @MaxLength(80)
  @IsString()
  purpose!: number;
 
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  participants!: number;
  
  @Min(1)
  @IsNotEmpty()
  roomId!: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PetSize } from "./pet.entity";

@Entity()
export class Plan{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bytea', nullable: true })
  photo: Buffer; // Consider using a dedicated file storage solution

  @Column()
  price: number;

  @Column()
  numberOfTrimmings: number;
  
  @Column()
  numberOfBaths: number;

  @Column({ type: 'enum', enum: PetSize })
  petSize: PetSize;

  @Column()
  description: string;

  @Column()
  hasConstrast: boolean;
}
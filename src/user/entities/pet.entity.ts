import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

export enum PetSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
  }
  
  export enum PetSex {
    MALE = 'male',
    FEMALE = 'female',
  }
  
  export enum PetBehavior {
    AGGRESSIVE = 'aggressive',
    CALM = 'calm',
    PLAYFUL = 'playful',
  }

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column({ type: 'enum', enum: PetSize })
  size: PetSize;

  @Column({ type: 'enum', enum: PetSex })
  sex: PetSex;

  @Column({ type: 'enum', enum: PetBehavior })
  behavior: PetBehavior;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column()
  castrated: boolean;

  @Column()
  healthProblems: boolean;

  @Column({ type: 'text', nullable: true })
  healthProblemsDescription: string;

  @Column()
  preferredProfessional: string; // i don't know how can add enum for employees

  @Column()
  specialAttention: string;

  @Column({ type: 'bytea', nullable: true })
  photo: Buffer; // Consider using a dedicated file storage solution

  @ManyToOne(() => User, (user) => user.pets)
  owner: User;
}

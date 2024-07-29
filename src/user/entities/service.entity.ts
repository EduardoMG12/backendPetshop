import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pet } from "./pet.entity";

export enum ServiceName {
    BATH = 'bath', // Banho
    TRIMMING = 'trimming', // Tosa
    CONSULTATION = 'consultation', // Consulta veterinária
    VACCINATION = 'vaccination', // Vacinação
    MEDICATION = 'medication', // Medicamentos
    BOARDING = 'boarding', // Hospedagem
    GROOMING = 'grooming', // Estética animal
    TRAINING = 'training', // Adestramento
    PET_SHOP = 'petShop', // Loja de produtos para pets
    BATH_AND_TRIM = 'bathAndTrim', // Banho com tosa
    OTHER = 'other', // Outros serviços não listados
    PLAN = 'plan' // I thinking about create other may or use plan here
  }

@Entity()
export class Service{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  
    @Column({ nullable: true })
    description: string;
  
    @Column()
    duration: number;
  
    @Column()
    price: number;
  
    @Column({ // this is better on schedule entity?
        type: 'enum',
        enum: ['scheduled', 'inProgress', 'completed', 'canceled'],
      })
      status: string;

    @Column({ default: true }) // is this necessary?
    isActive: boolean;
  
    @ManyToOne(() => Pet, pet => pet.services) // this is better on schedule entity?
    pet: Pet;

    // @ManyToOne(() => Employee, employee => employee.services) // i don't understand if Many to one make a sense
    // employee: Employee; // this is better on schedule entity?
  
    // @ManyToOne(() => Taxidriver, taxidriver => taxidriver.services) // i don't understand if Many to one make a sense
    // taxidriver: Taxidriver; // this is better on schedule entity?
  
    // @ManyToOne(() => Coupon, coupon => coupon.services) // i don't understand if Many to one make a sense
    // coupon: Coupon; // this is better on schedule entity?
}
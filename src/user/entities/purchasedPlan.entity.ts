import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PetSize } from './pet.entity';
import { User } from './user.entity';
import { Plan } from './plan.entity';

export enum PlanStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    CANCELED = 'canceled',
}

@Entity()
export class PurchasedPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  expirationDate: Date;
  
  @Column({ type: 'enum', enum: PlanStatus })
  status: string; 

  @ManyToOne(() => User, (user) => user.purchasedPlans)
  user: User;

  // I don't finally
  plan: Plan

  //I don't if this stay here or stay on entity Plan
  @Column()
  numberOfTrimmingsDone: number;
  
  //I don't if this stay here or stay on entity Plan
  @Column()
  numberOfBathsDone: number;
  
}

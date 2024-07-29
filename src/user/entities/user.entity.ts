import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm';

import { Transaction } from './Transaction.entity';
import { Pet } from './pet.entity';
import { PurchasedPlan } from './purchasedPlan.entity';
import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column()
  cpf: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => PurchasedPlan, (plan) => plan.user)
  purchasedPlans: PurchasedPlan;

  @OneToMany(() => Pet, (pet) => pet.owner)
  pets: Pet[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}

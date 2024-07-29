import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum AddressType {
  RESIDENTIAL = 'residential',
  COMMERCIAL = 'commercial',
}

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column()
  country: string;

//   @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
//   latitude: number;

//   @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
//   longitude: number;

  @Column({ type: 'enum', enum: AddressType })
  type: AddressType;

  @Column({ default: false })
  isPrimary: boolean;
}

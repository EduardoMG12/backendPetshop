import { Column, Entity } from "typeorm";
import { Plan } from "./plan.entity";

@Entity()
export class PetshopData{
    @Column()
    petshopName:string;

    @Column()
    petshopDescription:string;

    @Column()
    address: string

    @Column()
    plans: Plan[]

    @Column()
    services: Services[]

    @Column({nullable: true})
    funcionalityHours:string[]

    @Column()
    isOpen:boolean

    @Column()
    photo: Buffer

    
    // @Column()
    // employees: Employee;

}
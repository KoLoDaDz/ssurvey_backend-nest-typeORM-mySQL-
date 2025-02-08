import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'answermulti'})
export class answermulti{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number

    @Column()
    answer_id:number

    @Column()
    option:number
}
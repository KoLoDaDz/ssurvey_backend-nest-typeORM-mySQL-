import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'answerone'})
export class answerone{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number

    @Column()
    answer_id:number

    @Column()
    option:number
}
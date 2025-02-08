import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'question_type'})
export class question_type{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number

    @Column()
    question_type:string
}
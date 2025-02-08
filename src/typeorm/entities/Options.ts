import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'options'})
export class options{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number

    @Column()
    question_id:number

    @Column()
    text:string
}
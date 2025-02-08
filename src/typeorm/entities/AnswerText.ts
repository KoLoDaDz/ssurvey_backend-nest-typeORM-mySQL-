import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'answertext'})
export class answertext{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number

    @Column()
    answer_id:number

    @Column()
    text:number
}
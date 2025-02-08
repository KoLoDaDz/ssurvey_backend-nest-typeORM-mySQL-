import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'answers'})
export class answers{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number

    @Column()
    survey_id:number

    @Column()
    text:string

    @Column()
    type:number
}
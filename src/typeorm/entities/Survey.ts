import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'survey'})
export class survey{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number

    @Column()
    surveyName:string

    @Column()
    created_at:Date
}
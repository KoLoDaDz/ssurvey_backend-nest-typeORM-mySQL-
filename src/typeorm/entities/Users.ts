import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number

    @Column()
    uid:number

    @Column()
    question_id:number

    @Column()
    created_at:Date
}
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('quizes')

export class Quiz extends BaseEntity{

    @PrimaryGeneratedColumn({
        comment: 'The quiz unique identifier'
    })
    id: number

    @Column({
        type: 'varchar',
    })
    name: string;


    @Column({
        type: 'varchar',
    })
    email: string;

    @Column({
        type: 'varchar',
    })
    password: string;

    @Column({
        type: 'varchar',
    })
    confirmPassword: string;
}
// purpose of this module is to create the structure of the newsAgency entity
// and also define constraints of the columns

// pull out needed decorators from typeorm to cntroll the constraints
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

// we use @Entity decorator from typeorm to declare the structure of entities(tables)
@Entity()
export class NewsAgency {
    // entity's fields

    // it will auto generate the id with uuid value, when the record is inserting
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;
    
    @Column({ nullable: false })
    title: string;

    @Column()
    text: string;

    @Index()
    @Column()
    agencyName: string;

    // sets the date value when the record is inserting,
    // because of setting a defualt value
    @Index()
    @Column({ default: +new Date })
    dateMillisec: number

    // sets the date value when the record is inserting
    @CreateDateColumn()
    createdAt: Date
}
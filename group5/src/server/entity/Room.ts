// TypeORM imports
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToOne,
    OneToMany,
    ManyToOne,
    JoinColumn
} from "typeorm";

// Model Imports
import { RoomType } from "./RoomType";
import { Reservation } from "./Reservation";

// The Room model defines all of the rooms in the hotel
// There will be one entry per rooms
@Entity()
export class Room {

    // Auto generated UUID from TypeORM for uniqueness
    @PrimaryGeneratedColumn("uuid")
    uuid!: string;

    // Room type selection, for pricing
    @ManyToOne(() => RoomType, roomType => roomType.rooms)
    roomType!: RoomType;

    // Reservations associated with the current room
    @OneToMany(() => Reservation, reservation => reservation.assignedRoom)
    reservations!: Reservation[];

    // Auto generate by TypeORM for the creation date
    @CreateDateColumn()
    created!: Date;

    // Auto generated by TypeORM for the modified date
    @UpdateDateColumn()
    updated!: Date;

    // Auto generated by TypeORM for the deleted date
    @DeleteDateColumn()
    deleted!: Date;

}

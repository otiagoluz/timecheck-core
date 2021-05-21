import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity('succursales')
export default class Succursale {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  business_number: string;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
  
  @Column()
  address_1: string;

  @Column()
  city: string;

  @Column()
  province: string;

  @Column()
  postal_code: string;

  @ManyToMany(type => User, user => user.succursales, {
    cascade: true
  })
  @JoinTable()
  users: User[];

}
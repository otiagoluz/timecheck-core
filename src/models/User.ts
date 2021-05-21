import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Succursale from "./Succursale";

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @Column()
  is_admin: boolean;

  @ManyToMany(type => Succursale, succursale => succursale.users) 
  succursales: Succursale[];
}
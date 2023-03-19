import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  id: string;

  @Column()
  password: string;
}

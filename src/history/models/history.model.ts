import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class History extends Model {
  @Column
  name: string;

  @Column
  input: string;
  
  @Column
  output: string;

}

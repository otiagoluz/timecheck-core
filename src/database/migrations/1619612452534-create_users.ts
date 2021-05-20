import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1619612452534 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'first_name',
          type: 'varchar'
        },
        {        
          name: 'last_name',
          type: 'varchar',
          unsigned: true
        },
        {
          name: 'email',
          type: 'varchar'
        },
        {
          name: 'password',
          type: 'varchar',
          unsigned: true
        },
        {
          name: 'is_admin',
          type: 'boolean',
          default: false
        }
      ] 
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}

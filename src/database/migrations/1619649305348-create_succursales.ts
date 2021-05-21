import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createSuccursales1619649305348 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'succursales',
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
          name: 'business_number',
          type: 'varchar',
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'address_1',
          type: 'varchar'
        },
        {
          name: 'city',
          type: 'varchar',
        },
        {
          name: 'province',
          type: 'varchar'
        },
        {
          name: 'postal_code',
          type: 'varchar'
        },
      ],
    }))

    await queryRunner.createTable(new Table({
      name: 'succursales_users_users',
      columns: [
        {
          name: 'succursalesId',
          type: "int",
          isPrimary: true
        },
        {
          name: 'usersId',
          type: "int",
          isPrimary: true
        }
      ],
      foreignKeys: [
        {
          columnNames: ['succursalesId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'succursales',
          onDelete: 'CASCADE'          
        },
        {
          columnNames: ['usersId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('succursales');
    await queryRunner.dropTable('succursales_users_users');
  }

}

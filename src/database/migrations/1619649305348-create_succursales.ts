import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
          name: 'latitude',
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
          name: 'provinve',
          type: 'varchar'
        },
        {
          name: 'postal_code',
          type: 'varchar'
        },
        {
          name: 'user_id',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'SuccursaleUser',
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('succursales');
  }

}

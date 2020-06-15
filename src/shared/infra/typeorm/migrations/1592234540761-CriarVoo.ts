import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CriarVoo1592234540761 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'flights',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'codigoVoo',
            type: 'varchar',
          },
          {
            name: 'destino_id',
            type: 'uuid',
          },
          {
            name: 'origem_id',
            type: 'uuid',
          },
          {
            name: 'data',
            type: 'timestamp',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'flights',
      new TableForeignKey({
        name: 'LocalOrigem',
        columnNames: ['origem_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'locations',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'flights',
      new TableForeignKey({
        name: 'LocalDestino',
        columnNames: ['destino_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'locations',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('flights', 'LocalOrigem');
    await queryRunner.dropForeignKey('flights', 'LocalDestino');

    await queryRunner.dropColumn('flights', 'origem_id');
    await queryRunner.dropColumn('flights', 'destino_id');

    await queryRunner.dropTable('flights');
  }
}

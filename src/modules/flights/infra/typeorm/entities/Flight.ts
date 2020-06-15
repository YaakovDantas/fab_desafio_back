import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Location from '@modules/locations/infra/typeorm/entities/Location';

@Entity('flights')
class Flight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigoVoo: string;

  @Column()
  destino_id: string;

  @OneToMany(type => Location, () => Location)
  @JoinColumn({ name: 'destino_id' })
  destino: Location;

  @Column()
  origem_id: string;

  @OneToMany(type => Location, () => Location)
  @JoinColumn({ name: 'origem_id' })
  origem: Location;

  @Column()
  data: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Flight;

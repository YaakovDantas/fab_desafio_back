import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Location from '@modules/locations/infra/typeorm/entities/Location';

@Entity('flights')
class Flight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigoVoo: string;

  @Column({ select: false })
  destino_id: string;

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'destino_id' })
  destino: Location;

  @Column({ select: false })
  origem_id: string;

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'origem_id' })
  origem: Location;

  @Column()
  data: Date;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}

export default Flight;

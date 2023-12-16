import { Dispositivo } from 'src/dispositivo/dispositivo.entity';
import { Solicitud } from 'src/solicitud/solicitud.entity';
import * as bcrypt from 'bcrypt';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre: string;

  @Column()
  usuario: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @Column()
  telefono: string;

  @Column()
  cedula: string;

  //OneToMany

  @OneToMany(() => Dispositivo, (dispositivos) => dispositivos.usuario)
  dispositivos: Dispositivo[];

  @OneToMany(() => Solicitud, (solicitudes) => solicitudes.usuario)
  solicitudes: Solicitud[];

}

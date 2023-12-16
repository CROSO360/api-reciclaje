import { Dispositivo } from "src/dispositivo/dispositivo.entity";
import { Usuario } from "src/usuario/usuario.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn} from "typeorm"

@Entity()
export class Solicitud {
    
    @PrimaryGeneratedColumn()
    id_solicitud: number;

    @ManyToOne(() => Usuario, usuario => usuario.solicitudes)
    @JoinColumn({name: "id_usuario"})
    usuario: Usuario;

    @ManyToOne(() => Dispositivo, dispositivo => dispositivo.solicitudes)
    @JoinColumn({name: "id_dispositivo"})
    dispositivo: Dispositivo;

    @Column()
    fecha: Date;

    @Column()
    estado: string;

    @Column()
    informacion: string;

}

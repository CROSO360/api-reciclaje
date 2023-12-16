import { Solicitud } from "src/solicitud/solicitud.entity";
import { Usuario } from "src/usuario/usuario.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm"

@Entity()
export class Dispositivo {
    
    @PrimaryGeneratedColumn()
    id_dispositivo: number;

    @ManyToOne(() => Usuario, usuario => usuario.dispositivos)
    @JoinColumn({name: "id_usuario"})
    usuario: Usuario;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    objetivo: string;

    @Column()
    estado: string;

    @Column()
    categoria: string;


    //OneToMany

    @OneToMany(() => Solicitud, solicitudes => solicitudes.dispositivo)
    solicitudes: Solicitud[];
}

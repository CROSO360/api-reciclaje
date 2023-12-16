import { Solicitud } from "src/solicitud/solicitud.entity";
import { Usuario } from "src/usuario/usuario.entity";
export declare class Dispositivo {
    id_dispositivo: number;
    usuario: Usuario;
    nombre: string;
    descripcion: string;
    objetivo: string;
    estado: string;
    categoria: string;
    solicitudes: Solicitud[];
}

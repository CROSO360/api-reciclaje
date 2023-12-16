import { Dispositivo } from "src/dispositivo/dispositivo.entity";
import { Usuario } from "src/usuario/usuario.entity";
export declare class Solicitud {
    id_solicitud: number;
    usuario: Usuario;
    dispositivo: Dispositivo;
    fecha: Date;
    estado: string;
    informacion: string;
}

import { Dispositivo } from 'src/dispositivo/dispositivo.entity';
import { Solicitud } from 'src/solicitud/solicitud.entity';
export declare class Usuario {
    id_usuario: number;
    nombre: string;
    usuario: string;
    correo: string;
    contrasena: string;
    telefono: string;
    cedula: string;
    dispositivos: Dispositivo[];
    solicitudes: Solicitud[];
}

import { BaseService } from 'src/commons/service.commons';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService extends BaseService<Usuario> {
    private usuarioRepo;
    constructor(usuarioRepo: Repository<Usuario>);
    getRepository(): Repository<Usuario>;
    validateUser(usuario: string, pass: string): Promise<any>;
}

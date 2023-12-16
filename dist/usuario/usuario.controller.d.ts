import { BaseController } from 'src/commons/controller.commons';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { BaseService } from 'src/commons/service.commons';
import { LoginDto } from 'src/dto/login.dto';
export declare class UsuarioController extends BaseController<Usuario> {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    getService(): BaseService<Usuario>;
    login(loginDto: LoginDto): Promise<any>;
}

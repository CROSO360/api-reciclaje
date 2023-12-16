import { Body, Controller, Post } from '@nestjs/common';
import { BaseController } from 'src/commons/controller.commons';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { BaseService } from 'src/commons/service.commons';
import { LoginDto } from 'src/dto/login.dto';


@Controller('usuario')
export class UsuarioController extends BaseController<Usuario> {

  constructor(private readonly usuarioService: UsuarioService) {
    super();
  }

  getService(): BaseService<Usuario> {
      return this.usuarioService;
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    return this.usuarioService.validateUser(loginDto.usuario, loginDto.contrasena);
  }

}

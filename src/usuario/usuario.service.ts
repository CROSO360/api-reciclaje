import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BaseService } from 'src/commons/service.commons';
import { Usuario } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService extends BaseService<Usuario>{

    constructor(
        @InjectRepository(Usuario) 
        private usuarioRepo: Repository<Usuario>
    ){
        super();
    }

    getRepository(): Repository<Usuario> {
        return this.usuarioRepo;
    }

    async validateUser(usuario: string, pass: string): Promise<any> {
        const user = await this.usuarioRepo.findOne({ where: { usuario } });
        if (user && pass == user.contrasena) {
          const { contrasena, ...result } = user;
          return result;
        }
        throw new UnauthorizedException("Credenciales incorrectas");;
      }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario/usuario.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AppService {


  

  getHello(): string {
    return 'Hello World!';
  }
}

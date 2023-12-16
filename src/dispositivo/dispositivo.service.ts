import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';
import { Dispositivo } from './dispositivo.entity';

@Injectable()
export class DispositivoService extends BaseService<Dispositivo>{

    constructor(
        @InjectRepository(Dispositivo) private dispositivoRepo: Repository<Dispositivo>
    ){
        super();
    }

    getRepository(): Repository<Dispositivo> {
        return this.dispositivoRepo;
    }

}

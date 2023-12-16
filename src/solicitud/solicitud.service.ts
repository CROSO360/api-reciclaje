import { Injectable } from '@nestjs/common';
import { Solicitud } from './solicitud.entity';
import { BaseService } from 'src/commons/service.commons';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitudService extends BaseService<Solicitud> {

    constructor(
        @InjectRepository(Solicitud) private solicitudRepo: Repository<Solicitud>
    ){
        super();
    }

    getRepository(): Repository<Solicitud> {
        return this.solicitudRepo;
    }

}

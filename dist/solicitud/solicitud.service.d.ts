import { Solicitud } from './solicitud.entity';
import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';
export declare class SolicitudService extends BaseService<Solicitud> {
    private solicitudRepo;
    constructor(solicitudRepo: Repository<Solicitud>);
    getRepository(): Repository<Solicitud>;
}

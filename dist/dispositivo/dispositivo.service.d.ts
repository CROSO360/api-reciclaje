import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';
import { Dispositivo } from './dispositivo.entity';
export declare class DispositivoService extends BaseService<Dispositivo> {
    private dispositivoRepo;
    constructor(dispositivoRepo: Repository<Dispositivo>);
    getRepository(): Repository<Dispositivo>;
}

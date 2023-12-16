import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commons';
import { Dispositivo } from './dispositivo.entity';
import { DispositivoService } from './dispositivo.service';
export declare class DispositivoController extends BaseController<Dispositivo> {
    private readonly dispositivoService;
    constructor(dispositivoService: DispositivoService);
    getService(): BaseService<Dispositivo>;
}

import { Solicitud } from './solicitud.entity';
import { BaseController } from 'src/commons/controller.commons';
import { SolicitudService } from './solicitud.service';
import { BaseService } from 'src/commons/service.commons';
export declare class SolicitudController extends BaseController<Solicitud> {
    private readonly solicitudService;
    constructor(solicitudService: SolicitudService);
    getService(): BaseService<Solicitud>;
}

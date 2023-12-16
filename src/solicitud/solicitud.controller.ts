import { Controller } from '@nestjs/common';
import { Solicitud } from './solicitud.entity';
import { BaseController } from 'src/commons/controller.commons';
import { SolicitudService } from './solicitud.service';
import { BaseService } from 'src/commons/service.commons';

@Controller('solicitud')
export class SolicitudController extends BaseController<Solicitud> {

    constructor(private readonly solicitudService: SolicitudService) {
      super();
    }
  
    getService(): BaseService<Solicitud> {
        return this.solicitudService;
    }
  
  }
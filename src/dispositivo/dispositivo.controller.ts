import { Controller } from '@nestjs/common';
import { BaseController } from 'src/commons/controller.commons';
import { BaseService } from 'src/commons/service.commons';
import { Dispositivo } from './dispositivo.entity';
import { DispositivoService } from './dispositivo.service';

@Controller('dispositivo')
export class DispositivoController extends BaseController<Dispositivo> {

    constructor(private readonly dispositivoService: DispositivoService) {
      super();
    }
  
    getService(): BaseService<Dispositivo> {
        return this.dispositivoService;
    }
  
  }

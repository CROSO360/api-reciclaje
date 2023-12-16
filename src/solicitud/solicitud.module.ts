import { Module } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { SolicitudController } from './solicitud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitud } from './solicitud.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Solicitud])],
  providers: [SolicitudService],
  controllers: [SolicitudController]
})
export class SolicitudModule {}

import { Module } from '@nestjs/common';
import { DispositivoService } from './dispositivo.service';
import { DispositivoController } from './dispositivo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispositivo } from './dispositivo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dispositivo])],
  providers: [DispositivoService],
  controllers: [DispositivoController]
})
export class DispositivoModule {}

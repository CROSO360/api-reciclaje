import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { DispositivoModule } from './dispositivo/dispositivo.module';
import { SolicitudModule } from './solicitud/solicitud.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '212.1.208.199',
      port: 3306,
      username: 'u312507976_db63',
      password: '5Bg1123-2',
      database: 'u312507976_db63',
      autoLoadEntities: true,
    }),
    UsuarioModule, DispositivoModule, SolicitudModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

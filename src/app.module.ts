import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HistoryModule } from './history/history.module';
import { OperacionesModule } from './operaciones/oper.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'prueba2',
      autoLoadModels: true,
      synchronize: true,
    }),
    HistoryModule,
    OperacionesModule
  ],
})
export class AppModule {}

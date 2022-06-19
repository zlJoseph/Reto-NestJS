import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { History } from '../history/models/history.model';
import { OperacionesController } from './oper.controller';
import { HistoryService } from '../history/history.service';

@Module({
  imports: [SequelizeModule.forFeature([History])],
  providers: [HistoryService],
  controllers: [OperacionesController],
})
export class OperacionesModule {}

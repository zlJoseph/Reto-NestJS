import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { History } from './models/history.model';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';

@Module({
  imports: [SequelizeModule.forFeature([History])],
  providers: [HistoryService],
  controllers: [HistoryController],
})
export class HistoryModule {}

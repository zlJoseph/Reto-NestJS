import { Controller, Get } from '@nestjs/common';
import { History } from './models/history.model';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  findAll(): Promise<History[]> {
    return this.historyService.findAll();
  }

}

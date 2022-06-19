import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-history.dto';
import { History } from './models/history.model';

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel(History)
    private readonly userModel: typeof History,
  ) {}

  create(createUserDto: CreateUserDto): Promise<History> {
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<History[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<History> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}

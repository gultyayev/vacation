import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeHistoryDto } from './dto/create-employee-history.dto';
import { EmployeeHistory } from './interfaces/employee-history.interface';

@Injectable()
export class EmployeeHistoryService {
  constructor(
    @InjectModel('EmployeeHistory') private readonly employeeHistoryModel: Model<EmployeeHistory>
  ) {}

  async create(createEmployeeHistoryDto: CreateEmployeeHistoryDto) {
    const createdHistory = new this.employeeHistoryModel(createEmployeeHistoryDto);
    return createdHistory.save();
  }

  async findAll() {
    const list = await this.employeeHistoryModel.find().exec();

    return {
      list,
    };
  }
}

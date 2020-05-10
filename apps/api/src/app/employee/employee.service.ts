import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeDto } from './dto/employee.dto';
import { Employee } from './interfaces/employee.interface';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return createdEmployee.save();
  }

  async findAll() {
    const list = await this.employeeModel.find().populate('history').exec();

    return {
      list: list.map((employee) => new EmployeeDto(employee.toJSON())),
    };
  }
}

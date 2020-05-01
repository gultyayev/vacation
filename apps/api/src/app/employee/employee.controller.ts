import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    console.log(createEmployeeDto);
    await this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async findAll() {
    return this.employeeService.findAll();
  }
}

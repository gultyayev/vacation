import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEmployeeHistoryDto } from './dto/create-employee-history.dto';
import { EmployeeHistoryService } from './employee-history.service';

@Controller('employee-history')
export class EmployeeHistoryController {
  constructor(
    private readonly employeeHistoryService: EmployeeHistoryService
  ) {}

  @Post()
  async create(@Body() createEmployeeHistoryDto: CreateEmployeeHistoryDto) {
    console.log(createEmployeeHistoryDto);
    await this.employeeHistoryService.create(createEmployeeHistoryDto);
  }

  @Get()
  async findAll() {
    return this.employeeHistoryService.findAll();
  }
}

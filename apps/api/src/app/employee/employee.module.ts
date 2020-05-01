import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { EmployeeHistorySchema } from './schemas/employee-history.schema';
import { EmployeeSchema } from './schemas/employee.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Employee',
      schema: EmployeeSchema
    },
    {
      name: 'EmployeeHistory',
      schema: EmployeeHistorySchema
    },
  ])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}

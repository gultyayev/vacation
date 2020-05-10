import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeHistoryController } from './employee-history.controller';
import { EmployeeHistoryService } from './employee-history.service';
import { EmployeeHistorySchema } from './schemas/employee-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'EmployeeHistory',
        schema: EmployeeHistorySchema,
      },
    ]),
  ],
  controllers: [EmployeeHistoryController],
  providers: [EmployeeHistoryService],
})
export class EmployeeHistoryModule {}

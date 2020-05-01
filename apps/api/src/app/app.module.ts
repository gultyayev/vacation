import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeHistoryModule } from './employee-history/employee-history.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/api/.env',
    }),
    MongooseModule.forRoot(process.env.DB),
    EmployeeModule,
    EmployeeHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

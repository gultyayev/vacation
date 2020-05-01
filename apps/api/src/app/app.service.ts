import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Message } from '@vacation/api-interfaces';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getData(): Message {
    return { message: 'Welcome to my api!' };
  }
}

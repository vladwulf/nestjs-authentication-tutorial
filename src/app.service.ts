import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(userId: number): string {
    return 'Hello World!';
  }
}

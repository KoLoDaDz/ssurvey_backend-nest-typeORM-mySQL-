import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("got triggered");
    return 'Hello World!';
  }
}

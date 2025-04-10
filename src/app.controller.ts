import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
}

import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('test')
  async test(@Query() queryString: any) {
    return queryString;
  }
}

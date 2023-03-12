import { Controller, Get, Query } from '@nestjs/common';

@Controller('account-book')
export class AccountBookController {
  @Get('test')
  async test(@Query() queryString: any) {
    return queryString;
  }
}

import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import {
  CREATE_USER_INBOUND_PORT,
  CreateUserInboundPort,
  CreateUserInboundPortInputDto,
  CreateUserInboundPortOutputDto,
} from './inbound-port/create-user.inbound-port';

@Controller('user')
export class UserController {
  constructor(
    @Inject(CREATE_USER_INBOUND_PORT)
    private readonly createUserInboundPort: CreateUserInboundPort,
  ) {}

  @Get('test')
  async test(@Query() queryString: any) {
    return queryString;
  }

  @Post('create')
  async create(
    @Body() body: CreateUserInboundPortInputDto,
  ): Promise<CreateUserInboundPortOutputDto> {
    return this.createUserInboundPort.execute(body);
  }
}

import {
  CreateUserInboundPort,
  CreateUserInboundPortInputDto,
  CreateUserInboundPortOutputDto,
} from '../inbound-port/create-user.inbound-port';
import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_USER_OUTBOUND_PORT,
  CreateUserOutboundPort,
} from '../outbound-port/create-user.outbound-port';

@Injectable()
export class CreateUserService implements CreateUserInboundPort {
  constructor(
    @Inject(CREATE_USER_OUTBOUND_PORT)
    private readonly createUserOutboundPort: CreateUserOutboundPort,
  ) {}

  async execute(
    params: CreateUserInboundPortInputDto,
  ): Promise<CreateUserInboundPortOutputDto> {
    console.log(params);

    try {
      await this.createUserOutboundPort.execute(params);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

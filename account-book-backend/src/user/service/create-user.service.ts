import {
  CreateUserInboundPort,
  CreateUserInboundPortInputDto,
  CreateUserInboundPortOutputDto,
} from '../inbound-port/create-user.inbound-port';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserService implements CreateUserInboundPort {
  execute(
    params: CreateUserInboundPortInputDto,
  ): Promise<CreateUserInboundPortOutputDto> {
    console.log(params);

    return Promise.resolve(undefined);
  }
}

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

    /**
     * TODO 계정 생성용 outbound port 및 outbound adapter 셋팅
     * TODO DB 연결용 typeorm 셋팅
     *
     */

    return Promise.resolve(undefined);
  }
}

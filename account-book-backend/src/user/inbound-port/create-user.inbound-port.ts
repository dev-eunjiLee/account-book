import { User } from '../entity/user.entity';

export const CREATE_USER_INBOUND_PORT = 'CREATE_USER_INBOUND_PORT';

export type CreateUserInboundPortInputDto = Pick<User, 'password' | 'id'>;
export type CreateUserInboundPortOutputDto = void;

export interface CreateUserInboundPort {
  execute(
    params: CreateUserInboundPortInputDto,
  ): Promise<CreateUserInboundPortOutputDto>;
}

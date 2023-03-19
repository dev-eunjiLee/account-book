import { User } from '../entity/user.entity';

export const CREATE_USER_OUTBOUND_PORT = 'CREATE_USER_OUTBOUND_PORT';

export type CreateUserOutboundInputDto = Pick<User, 'password' | 'id'>;
export type CreateUserOutboundOutputDto = void;

export interface CreateUserOutboundPort {
  execute(
    param: CreateUserOutboundInputDto,
  ): Promise<CreateUserOutboundOutputDto>;
}

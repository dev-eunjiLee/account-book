export const CREATE_USER_INBOUND_PORT = 'CREATE_USER_INBOUND_PORT';

export type CreateUserInboundPortInputDto = {
  id: string;
  password: string;
};
export type CreateUserInboundPortOutputDto = void;

export interface CreateUserInboundPort {
  execute(
    params: CreateUserInboundPortInputDto,
  ): Promise<CreateUserInboundPortOutputDto>;
}

import {
  CreateUserOutboundInputDto,
  CreateUserOutboundOutputDto,
  CreateUserOutboundPort,
} from '../outbound-port/create-user.outbound-port';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

export class CreateUserOutboundAdapter implements CreateUserOutboundPort {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(
    param: CreateUserOutboundInputDto,
  ): Promise<CreateUserOutboundOutputDto> {
    const user = await this.userRepository.create({
      id: param.id,
      password: param.password,
    });

    return await this.userRepository.save(user);
  }
}

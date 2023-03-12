import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CREATE_USER_INBOUND_PORT } from './inbound-port/create-user.inbound-port';
import { CreateUserService } from './service/create-user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: CREATE_USER_INBOUND_PORT,
      useClass: CreateUserService,
    },
  ],
})
export class UserModule {}

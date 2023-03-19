import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CREATE_USER_INBOUND_PORT } from './inbound-port/create-user.inbound-port';
import { CreateUserService } from './service/create-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: CREATE_USER_INBOUND_PORT,
      useClass: CreateUserService,
    },
  ],
})
export class UserModule {}

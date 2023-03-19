import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountBookModule } from './account-book/account-book.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';

@Module({
  imports: [
    UserModule,
    AccountBookModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.82.23.63',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'account_book_dev',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

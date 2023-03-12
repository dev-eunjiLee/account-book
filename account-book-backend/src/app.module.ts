import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountBookModule } from './account-book/account-book.module';

@Module({
  imports: [AccountBookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

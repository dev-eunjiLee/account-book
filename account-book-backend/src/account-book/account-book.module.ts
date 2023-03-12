import { Module } from '@nestjs/common';
import { AccountBookController } from './account-book.controller';

@Module({
  imports: [],
  controllers: [AccountBookController],
  providers: [],
})
export class AccountBookModule {}

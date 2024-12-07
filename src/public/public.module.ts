import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PublicController } from './public.controller';
import { PublicService } from './public.service';

@Module({
  imports: [ConfigModule],
  controllers: [PublicController],
  providers: [PublicService],
})
export class PublicModule {}

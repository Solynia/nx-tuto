import { Module } from '@nestjs/common';

import { HeroesModule } from '../heroes/heroes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

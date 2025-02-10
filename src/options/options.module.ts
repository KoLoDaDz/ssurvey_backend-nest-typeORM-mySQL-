import { Module } from '@nestjs/common';
import { OptionsController } from './controllers/options/options.controller';
import { OptionsService } from './services/options/options.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from 'src/typeorm/entities/Options';

@Module({
  imports: [TypeOrmModule.forFeature([options])],
  controllers: [OptionsController],
  providers: [OptionsService]
})
export class OptionsModule {}

import { Module } from '@nestjs/common';
import { TypesController } from './controllers/types/types.controller';
import { TypesService } from './services/types/types.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { question_type } from 'src/typeorm/entities/Type';

@Module({
  imports: [TypeOrmModule.forFeature([question_type])],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}

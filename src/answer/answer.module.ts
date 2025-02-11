import { Module } from '@nestjs/common';
import { AnswerController } from './controllers/answer/answer.controller';
import { AnswerService } from './services/answer/answer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { answers } from 'src/typeorm/entities/Answers';

@Module({
  imports:[TypeOrmModule.forFeature([answers])],
  controllers: [AnswerController],
  providers: [AnswerService]
})
export class AnswerModule {}

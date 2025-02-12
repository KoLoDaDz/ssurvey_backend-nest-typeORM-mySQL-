import { Module } from '@nestjs/common';
import { AnswerTextController } from './controllers/answer-text/answer-text.controller';
import { AnswerTextService } from './services/answer-text/answer-text.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { answertext } from 'src/typeorm/entities/AnswerText';

@Module({
  imports:[TypeOrmModule.forFeature([answertext])],
  controllers: [AnswerTextController],
  providers: [AnswerTextService]
})
export class AnswerTextModule {}

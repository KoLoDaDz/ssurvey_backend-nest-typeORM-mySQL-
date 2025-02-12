import { Module } from '@nestjs/common';
import { AnswerMultiController } from './controllers/answer-multi/answer-multi.controller';
import { AnswerMultiService } from './services/answer-multi/answer-multi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { answermulti } from 'src/typeorm/entities/AnswersMultiOption';

@Module({
  imports:[TypeOrmModule.forFeature([answermulti])],
  controllers: [AnswerMultiController],
  providers: [AnswerMultiService]
})
export class AnswerMultiModule {}

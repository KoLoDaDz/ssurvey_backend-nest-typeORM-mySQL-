import { Module } from '@nestjs/common';
import { AnswerOneController } from './controllers/answer-one/answer-one.controller';
import { AnswerOneService } from './services/answer-one/answer-one.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { answerone } from 'src/typeorm/entities/AnswersOneOption';

@Module({
  imports:[TypeOrmModule.forFeature([answerone])],
  controllers: [AnswerOneController],
  providers: [AnswerOneService]
})
export class AnswerOneModule {}

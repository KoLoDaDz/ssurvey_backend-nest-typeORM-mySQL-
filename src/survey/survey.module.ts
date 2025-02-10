import { Module } from '@nestjs/common';
import { SurveyController } from './controllers/survey/survey.controller';
import { SurveyService } from './services/survey/survey.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { survey } from 'src/typeorm/entities/Survey';

@Module({
  imports: [TypeOrmModule.forFeature([survey])],
  controllers: [SurveyController],
  providers: [SurveyService]
})
export class SurveyModule {}

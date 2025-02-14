import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { surveyDto } from 'src/survey/dtos/survey.dto';
import { survey } from 'src/typeorm/entities/Survey';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyService {
    constructor(@InjectRepository(survey) private surveyRepository: Repository<survey>){}
    findSurvey(){
        return this.surveyRepository.find();
    };
    createSurvey(createSurveyDetails: surveyDto){
        const newSurvey = this.surveyRepository.create({
            ...createSurveyDetails,
            created_at: new Date()
        });
        return this.surveyRepository.save(newSurvey);
    };
    editSurvey(id:number,surveyData:surveyDto){
        this.surveyRepository.update({id},{...surveyData});
    };
    deleteSurvey(id:number){
        this.surveyRepository.delete({id});
    };
}

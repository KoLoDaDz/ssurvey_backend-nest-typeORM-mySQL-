import { Body, Controller, Get, Post } from '@nestjs/common';
import { surveyDto } from 'src/survey/dtos/survey.dto';
import { SurveyService } from 'src/survey/services/survey/survey.service';

@Controller('survey')
export class SurveyController {
    constructor(private surveyService:SurveyService){}
    @Get()
    getSurvey(){
        return this.surveyService.findSurvey()
    }

    @Post()
    createSurvey(@Body() createSurveyDto: surveyDto){
        const {...surveyDto} = createSurveyDto;
        this.surveyService.createSurvey(surveyDto)
    }
}

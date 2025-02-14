import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

    @Put(':id')
    updateSurvey(@Param('id',ParseIntPipe)id:number,@Body()updateSurveyDto:surveyDto){
        this.surveyService.editSurvey(id,updateSurveyDto);
    };

    @Delete(':id')
    deleteSurvey(@Param('id',ParseIntPipe)id:number){
        this.surveyService.deleteSurvey(id);
    };
}

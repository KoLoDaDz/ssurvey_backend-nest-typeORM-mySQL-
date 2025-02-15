import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { answerDto } from 'src/answer/dtos/answer.dto';
import { AnswerService } from 'src/answer/services/answer/answer.service';

@Controller('answer')
export class AnswerController {
    constructor(private answerService:AnswerService){}
    @Get()
    getAnswer(){
        return this.answerService.findAnswer()
    }

    @Post()
    createAnswer(@Body() createAnswerDto: answerDto){
        const {...answerDto} = createAnswerDto;
        this.answerService.createAnswer(answerDto);
    }

    @Put(':id')
    updateSurvey(@Param('id',ParseIntPipe)id:number,@Body()updateSurveyDto:answerDto){
        this.answerService.editAnswer(id,updateSurveyDto);
    };

    @Delete(':id')
    deleteSurvey(@Param('id',ParseIntPipe)id:number){
        this.answerService.deleteAnswer(id);
    };
}

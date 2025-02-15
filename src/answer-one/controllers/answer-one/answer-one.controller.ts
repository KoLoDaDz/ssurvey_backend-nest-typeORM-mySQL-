import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { answeroneDto } from 'src/answer-one/dtos/answerOne.dto';
import { AnswerOneService } from 'src/answer-one/services/answer-one/answer-one.service';

@Controller('answer-one')
export class AnswerOneController {
    constructor(private answerService:AnswerOneService){};
    @Get()
    getAnswerOne(){
        return this.answerService.findAnswerOne();
    }

    @Post()
    createAnswerOne(@Body() createAnsweroneDto: answeroneDto){
        const {...answeroneDto} = createAnsweroneDto;
        this.answerService.createAnswerOne(answeroneDto)
    }

    @Put(':id')
    updateSurvey(@Param('id',ParseIntPipe)id:number,@Body()updateSurveyDto:answeroneDto){
        this.answerService.editAnswer(id,updateSurveyDto);
    };

    @Delete(':id')
    deleteSurvey(@Param('id',ParseIntPipe)id:number){
        this.answerService.deleteAnswer(id);
    };
}


import { Body, Controller, Get, Post } from '@nestjs/common';
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
}

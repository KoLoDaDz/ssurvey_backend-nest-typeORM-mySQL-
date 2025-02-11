import { Body, Controller, Get, Post } from '@nestjs/common';
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
}

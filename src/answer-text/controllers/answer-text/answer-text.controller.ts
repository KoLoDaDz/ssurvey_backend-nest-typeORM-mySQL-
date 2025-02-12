import { Body, Controller, Get, Post } from '@nestjs/common';
import { answertextDto } from 'src/answer-text/dtos/answer-text.dto';
import { AnswerTextService } from 'src/answer-text/services/answer-text/answer-text.service';

@Controller('answer-text')
export class AnswerTextController {
    constructor(private answerTextService:AnswerTextService){}
    @Get()
    getAnswertext(){
        return this.answerTextService.findAnswertext()
    }
    
    @Post()
    createAnswertext(@Body() createAnswertextDto: answertextDto){
        const {...answertextDto} = createAnswertextDto;
        this.answerTextService.createAnswertext(answertextDto)
    }
}

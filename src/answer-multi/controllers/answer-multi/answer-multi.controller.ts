import { Body, Controller, Get, Post } from '@nestjs/common';
import { answermultiDto } from 'src/answer-multi/dtos/answer-multi.dto';
import { AnswerMultiService } from 'src/answer-multi/services/answer-multi/answer-multi.service';

@Controller('answer-multi')
export class AnswerMultiController {
    constructor(private answermultiService:AnswerMultiService){}
    @Get()
    getAnswermulti(){
        return this.answermultiService.findAnswermulti();
    }

    @Post()
    createAnswermulti(@Body() createAnswermultiDto:answermultiDto){
        const {...answermultiDto} = createAnswermultiDto;
        this.answermultiService.createAnswermulti(answermultiDto)
    }
}

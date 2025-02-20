import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { answerDto } from 'src/answer/dtos/answer.dto';
import { answers } from 'src/typeorm/entities/Answers';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerService {
    constructor(@InjectRepository(answers) private answerRepository: Repository<answers>){};
    findAnswer(){
        return this.answerRepository.find();
    };
    createAnswer(createAnswerDetails: answerDto){
        const newAnswer = this.answerRepository.create({
            ...createAnswerDetails
        })
        return this.answerRepository.save(newAnswer)
    };
    findAnswerBySurveyId(id:number){
        return this.answerRepository.findBy({id});
    };
    editAnswer(id:number,answerData:answerDto){
        this.answerRepository.update({id},{...answerData});
    };
    deleteAnswer(id:number){
        this.answerRepository.delete({id});
    };
}

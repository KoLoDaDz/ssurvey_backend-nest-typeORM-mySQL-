import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { answeroneDto } from 'src/answer-one/dtos/answerOne.dto';
import { answerone } from 'src/typeorm/entities/AnswersOneOption';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerOneService {
    constructor(@InjectRepository(answerone)private answeroneRepository: Repository<answerone>){};
    findAnswerOne(){
        return this.answeroneRepository.find();
    };
    createAnswerOne(createAsnwerOneDetails:answeroneDto){
        const newAnswer = this.answeroneRepository.create({
            ...createAsnwerOneDetails
        });
        return this.answeroneRepository.save(newAnswer);
    };
    editAnswer(id:number,answerData:answeroneDto){
        this.answeroneRepository.update({id},{...answerData});
    };
    deleteAnswer(id:number){
        this.answeroneRepository.delete({id});
    };
}

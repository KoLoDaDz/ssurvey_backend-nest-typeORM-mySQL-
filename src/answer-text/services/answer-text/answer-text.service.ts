import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { answertextDto } from 'src/answer-text/dtos/answer-text.dto';
import { answertext } from 'src/typeorm/entities/AnswerText';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerTextService {
    constructor(@InjectRepository(answertext) private answertextRepository: Repository<answertext>){};
    findAnswertext(){
        return this.answertextRepository.find();
    };
    createAnswertext(createAnswertextDetails:answertextDto){
        const newAnswer = this.answertextRepository.create({
            ...createAnswertextDetails
        });
        return this.answertextRepository.save(newAnswer);
    };
    editAnswer(id:number,answerData:answertextDto){
        this.answertextRepository.update({id},{...answerData});
    };
    deleteAnswer(id:number){
        this.answertextRepository.delete({id});
    };
}

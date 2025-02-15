import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { answermultiDto } from 'src/answer-multi/dtos/answer-multi.dto';
import { answermulti } from 'src/typeorm/entities/AnswersMultiOption';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerMultiService {
    constructor(@InjectRepository(answermulti) private answermultiRepository: Repository<answermulti>){};
    findAnswermulti(){
        return this.answermultiRepository.find();
    };
    createAnswermulti(createAnswermultiDetails:answermultiDto){
        const newAnswer = this.answermultiRepository.create({
            ...createAnswermultiDetails
        });
        return this.answermultiRepository.save(newAnswer);
    };
    editAnswer(id:number,answerData:answermultiDto){
        this.answermultiRepository.update({id},{...answerData});
    };
    deleteAnswer(id:number){
        this.answermultiRepository.delete({id});
    };
}

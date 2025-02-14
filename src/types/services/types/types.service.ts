import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { question_type } from 'src/typeorm/entities/Type';
import { createTypeDto } from 'src/types/dtos/createType.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TypesService {
    constructor(@InjectRepository(question_type) private typeRepository: Repository<question_type>){}
    findTypes(){
        return this.typeRepository.find();
    }
    createTypes(createTypeDetails: createTypeDto){
        const newType = this.typeRepository.create({
            ...createTypeDetails
        })
        return this.typeRepository.save(newType);
    }
    updateTypes(id:number,updateTypesDetails:createTypeDto){
        this.typeRepository.update({id},{...updateTypesDetails});
    }
    deleteTypes(id:number){
        this.typeRepository.delete({id});
    }
}

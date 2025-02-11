import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { optionsDto } from 'src/options/dtos/option.dto';
import { options } from 'src/typeorm/entities/Options';
import { Repository } from 'typeorm';

@Injectable()
export class OptionsService {
    constructor(@InjectRepository(options) private optionsRepository:Repository<options>){};
    findOption(){
        return this.optionsRepository.find();
    };
    createOption(createOptionDetails: optionsDto){
        const newOption = this.optionsRepository.create({
            ...createOptionDetails
        });
        return this.optionsRepository.save(newOption);
    };
}

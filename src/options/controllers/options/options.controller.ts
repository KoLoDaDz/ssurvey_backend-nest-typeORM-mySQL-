import { Body, Controller, Get, Post } from '@nestjs/common';
import { optionsDto } from 'src/options/dtos/option.dto';
import { OptionsService } from 'src/options/services/options/options.service';

@Controller('options')
export class OptionsController {
    constructor(private optionService:OptionsService){}
    @Get()
    getOption(){
        return this.optionService.findOption()
    }

    @Post()
    createOption(@Body() createOptionDto: optionsDto){
        const {...optionsDto} = createOptionDto;
        this.optionService.createOption(optionsDto)
    }
}

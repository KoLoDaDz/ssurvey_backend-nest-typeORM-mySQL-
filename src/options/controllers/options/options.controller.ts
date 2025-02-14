import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

    @Put(':id')
    UpdateOptions(@Param('id',ParseIntPipe)id:number,@Body() updateOptionsDto:optionsDto){
        this.optionService.updateOptions(id,updateOptionsDto);
    }

    @Delete(':id')
    DeleteOptions(@Param('id',ParseIntPipe)id:number){
        this.optionService.deleteOptions(id);
    }
}

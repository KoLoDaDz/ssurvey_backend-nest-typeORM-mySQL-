import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { createTypeDto } from 'src/types/dtos/createType.dto';
import { TypesService } from 'src/types/services/types/types.service';

@Controller('types')
export class TypesController {
    constructor(private typesService: TypesService){}
    @Get()
    getTypes(){
        return this.typesService.findTypes();
    }

    @Post()
    createTypes(@Body() createTypesDto: createTypeDto){
        const {...createTypeDto} = createTypesDto;
        this.typesService.createTypes(createTypeDto);
    }

    @Put(':id')
    updateTypes(@Param('id',ParseIntPipe)id:number,@Body()updateTypesDto:createTypeDto){
        this.typesService.updateTypes(id,updateTypesDto);
    }

    @Delete(':id')
    deleteTypes(@Param('id',ParseIntPipe)id:number){
        this.typesService.deleteTypes(id);
    }
}

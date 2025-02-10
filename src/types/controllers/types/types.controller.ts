import { Body, Controller, Get, Post } from '@nestjs/common';
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
}

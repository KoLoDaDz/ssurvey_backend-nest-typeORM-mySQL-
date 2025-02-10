import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from '../../dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Get()
    async getUsers(){
        const Users = await this.userService.findUser();
        return Users;
    }

    @Post()
    createUsers(@Body() createUserDto: createUserDto){
        this.userService.createUser(createUserDto);
    }
}

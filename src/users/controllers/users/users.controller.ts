import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

    @Get(':uid')
    async getUsersByUid(@Param('uid', ParseIntPipe) uid:number){
        const UsersByUid = await this.userService.findUsersByUid(uid);
        return UsersByUid;
    }

    @Post()
    createUsers(@Body() createUserDto: createUserDto){
        this.userService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id:number,@Body() updateUserDto:createUserDto){
        this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id:number){
        this.userService.deleteUser(id);
    }
}

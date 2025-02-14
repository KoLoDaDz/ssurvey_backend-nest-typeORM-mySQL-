import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/Users';
import { createUserParams } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,){}

    findUser(){
        return this.userRepository.find();
    }
    createUser(userDetails: createUserParams){
        const newAnswer = this.userRepository.create({
            ...userDetails,
            created_at:new Date(),
        });
        this.userRepository.save(newAnswer);
    }
    updateUser(id: number, updateUserDetails:createUserParams){
        this.userRepository.update({id},{...updateUserDetails});
    }
    deleteUser(id: number){
        this.userRepository.delete({id});
    }
}

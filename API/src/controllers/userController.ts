
import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import {User} from "../models/userModels";

class UserController{
    async create(request : Request, response : Response){
        const {name , email} = request.body;
        
        const userRepository = getRepository(User);
        
        //SELECT * FROM USER WHERE EMAIL = this.email
        const UserAlreadyExists = await userRepository.findOne({
            email
        })

        if(UserAlreadyExists){
            return response.status(400).json({
                error: "User already exists...", 
            })
        }
        const user = userRepository.create({
            name, email
        })
        await userRepository.save(user);

        return response.json(user);
    }
}

export { UserController }
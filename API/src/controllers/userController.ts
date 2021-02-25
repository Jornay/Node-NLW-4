
<<<<<<< HEAD
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from "../repositories/UserRepository";

=======
import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import {User} from "../models/userModels";
>>>>>>> 90449839de82ab2c4c4c938f7a36d74cf30a87f3

class UserController{
    async create(request : Request, response : Response){
        const {name , email} = request.body;
        
<<<<<<< HEAD
        const userRepository = getCustomRepository(UserRepository);
=======
        const userRepository = getRepository(User);
>>>>>>> 90449839de82ab2c4c4c938f7a36d74cf30a87f3
        
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

<<<<<<< HEAD
        return response.status(201).json(user);
    }
}

export { UserController };
=======
        return response.json(user);
    }
}

export { UserController }
>>>>>>> 90449839de82ab2c4c4c938f7a36d74cf30a87f3

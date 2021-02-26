import { Request, Response } from 'express';
import SendMailService from '../services/sendMailService'
import { UserRepository } from "../repositories/UserRepository";
import { SurveyRepository} from "../repositories/surveyRepository";
import { SurveysUsersRepository} from "../repositories/surveyUsersRepository";
import  {resolve} from 'path';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppErrors';


class SendMailController {

    async execute(request:Request, response: Response ){
        const {email, survey_id} = request.body;

        const usersRepository = getCustomRepository(UserRepository);
        const surveyRepository = getCustomRepository(SurveyRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const user = await usersRepository.findOne({email});

        if(!user){
            throw new AppError("User does not exists")
            
           
        }

        const survey = await surveyRepository.findOne({id : survey_id})

        if(!survey){
            throw new AppError("Survey does not exists...")
        }

        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
            where : [
                {user_id: user.id, value: null}
            ],
            relations: ["user", "survey"],
        });
        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            id: "",
            link: process.env.URL_MAIL
        }
        const npsPath = resolve(__dirname, "..", "views", "emails", "npsEmail.hbs")
        

        if(surveyUserAlreadyExists){
            variables.id = surveyUserAlreadyExists.id;
            await SendMailService.execute(email, survey.title ,variables, npsPath)
            return response.json(surveyUserAlreadyExists);
        }

        //Salvar as informações na tabela de surveys
        const surveyUser = surveysUsersRepository.create({
            user_id : user.id,
            survey_id
        })
        await surveysUsersRepository.save(surveyUser);

        //Enviar email para o usuário
        variables.id = surveyUser.id
    
        await SendMailService.execute(email, survey.title, variables, npsPath)

        return response.json(surveyUser);
        
    }
 }

 export {SendMailController};
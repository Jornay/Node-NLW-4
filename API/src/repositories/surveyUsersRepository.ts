import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/surveyUserModels";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export { SurveysUsersRepository }
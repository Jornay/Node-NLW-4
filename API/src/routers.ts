import  { Router } from 'express'
import { UserController } from './controllers/userController';
<<<<<<< HEAD
import { SurveyController } from './controllers/surveyController';

=======
>>>>>>> 90449839de82ab2c4c4c938f7a36d74cf30a87f3

const router  = Router();

const userController = new UserController();
<<<<<<< HEAD
const surveyController =  new SurveyController();

router.post("/users", userController.create)
router.post("/surveys",surveyController.create)
router.get("/surveys",surveyController.show)


=======
router.post("/users", userController.create)
>>>>>>> 90449839de82ab2c4c4c938f7a36d74cf30a87f3
export { router };
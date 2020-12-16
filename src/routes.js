import { Router } from 'express'
import InstructorController from './app/controllers/InstructorController'
import MemberController from './app/controllers/MemberController'
import InstructorMemberController from './app/controllers/InstructorMemberController'

const routes = new Router()

routes.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Rotas instrutores
routes.get('/instructors', InstructorController.index)
routes.get('/instructors/:id', InstructorController.indexbypk)
routes.post('/instructors', InstructorController.store)
routes.put('/instructors/:id', InstructorController.update)
routes.delete('/instructors/:id', InstructorController.delete)

//Rotas membros
routes.get('/members', MemberController.index)
routes.get('/members/:id', MemberController.indexbypk)
routes.post('/instructors/:instructor_id/members', MemberController.store)
routes.put('/members/:id', MemberController.update)
routes.delete('/members/:id', MemberController.delete)

routes.get('/instructors/:instructor_id/members', InstructorMemberController.index)

export default routes


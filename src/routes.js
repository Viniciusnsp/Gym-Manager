import { Router } from 'express'
import InstructorController from './app/controllers/InstructorController'
import MemberController from './app/controllers/MemberController'
import InstructorMemberController from './app/controllers/InstructorMemberController'

const routes = new Router()

//Rotas instrutores
routes.get('/instructors', InstructorController.index)
routes.post('/instructors', InstructorController.store)
routes.put('/instructors/:id', InstructorController.update)
routes.delete('/instructors/:id', InstructorController.delete)

//Rotas membros
routes.get('/members', MemberController.index)
routes.post('/instructors/:instructor_id/members', MemberController.store)
routes.put('/members/:id', MemberController.update)
routes.delete('/members/:id', MemberController.delete)

routes.get('/instructors/:instructor_id/members', InstructorMemberController.index)

export default routes


import { Router } from 'express'
import InstructorController from './app/controllers/InstructorController'

const routes = new Router()

routes.post('/instructors', InstructorController.store)
routes.put('/instructors/:index', InstructorController.update)

export default routes


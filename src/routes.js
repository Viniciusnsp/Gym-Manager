import { Router } from 'express'
import Instructor from './app/models/instructor'

const routes = new Router()

routes.get('/', async (req, res) => {
    const instructor = await Instructor.create({
        name: 'Vinicius Pereira',
        email: 'vinicius@gmail.com',
        gender: 'masculino',
        services: 'crossfit',
    })
    return res.json(instructor)
})

export default routes


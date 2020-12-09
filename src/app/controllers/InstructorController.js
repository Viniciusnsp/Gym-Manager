import Instructor from '../models/instructor'

class InstructorController {
  async index(req, res) {
    const instructors = await Instructor.findAll()
      
    return res.json(instructors)
  }

  async store(req, res) {
    const instructor = await Instructor.create(req.body)
      
    return res.json(instructor)
  }

  async update(req, res) {
      const { id } = req.params
      const { avatar_url, name, email, gender, services } = (req.body)

      const instructor = await Instructor.update({ avatar_url, name, email, gender, services },
        { where: 
          {
           id: id
          }
        })
         return res.json(instructor)
    }
  
  async delete(req, res) {
      const { id } = req.params

      const instructor = await Instructor.destroy({where: { id: id }})
      return res.send(`Instrutor deletado com sucesso.`)
  }
      
}

export default new InstructorController
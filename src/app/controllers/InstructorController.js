import Instructor from '../models/instructor'

class InstructorController {
  async store(req, res) {
    const instructorExists = await Instructor.findOne({ where: { email: req.body.email }})

    if (instructorExists) {
        return res.status(400).json({ error: 'Instructor already exists.' })
    }

    const { id, avatar_url, name, email, gender, services, created_at } = await Instructor.create(req.body)
      
    return res.json({
        id,
        avatar_url,
        name,
        email,
        gender,
        services,
        created_at,
    })
  }

  async update(req, res) {
      const { index } = req.params
      const { email } = req.body

      const instructor = await Instructor.findByPk(req.instructorId)

      if (email != instructor.email) {
          const instructorExists = await Instructor.findOne({ where: { email }})

          if(instructorExists) {
              return res.status(400).json({ error: 'Instructor already exists. '})
          }
      }

      const { id, avatar_url, name, gender, services, created_at } = await instructor[index].update(req.body)
      return res.json({ 
        id,
        avatar_url,
        name,
        email,
        gender,
        services,
        created_at,
      })
  }
}

export default new InstructorController
import Member from '../models/member'
import Instructor from '../models/instructor'

class MemberController {
  async index(req, res) {
    const members = await Member.findAll()
    return res.json(members)
  }

  async store(req, res) {
    const { instructor_id } = req.params  
    const { avatar_url, name, email, gender, height, weight } = (req.body)

    const instructor = await Instructor.findByPk(instructor_id)

    if(!instructor) {
        return res.status(400).json({ error: 'Instructor not found '})
    }

    const member =  await Member.create({
        avatar_url,
        name,
        email,
        gender,
        height,
        weight,
        instructor_id,
    })
      
    return res.json(member)
  }

  async update(req, res) {
    const { id } = req.params
    const { avatar_url, name, email, gender, height, weight } = (req.body)

    const member = await Member.update({ avatar_url, name, email, gender, height, weight },
      { where: 
        {
         id: id
        }
      })
       return res.json(member)
  }

 async delete(req, res) {
    const { id } = req.params

    const member = await Member.destroy({where: { id: id }})
    return res.send(`Membro deletado com sucesso.`)
}
   
}

export default new MemberController
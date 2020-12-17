import Member from '../models/member'

class MemberController {
  async index(req, res) {
    const members = await Member.findAll()
    return res.json(members)
  }
  async indexbypk(req, res) {
    const { id } = req.params

    const member = await Member.findAll({
      where: 
      {
        id:id
      }
    }) 
    return res.json(member)
  }

  async store(req, res) {
    const member = await Member.create(req.body)
  
    return res.json(member)
  }

  async update(req, res) {
    const { id } = req.params
    const { name, email, gender, height, weight } = (req.body)

    const member = await Member.update({  name, email, gender, height, weight },
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
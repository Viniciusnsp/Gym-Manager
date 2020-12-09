import Member from '../models/member'
import Instructor from '../models/instructor'

class InstructorMemberController {
  async index(req, res) {
    const { instructor_id } = req.params

    const instructor = await Instructor.findByPk(instructor_id, {
      include: { association: 'members' }
    }) 
    return res.json(instructor)
  }

      }
      
      
      // const instructor = await Instructor.findByPk(req.instructorId)
      


export default new InstructorMemberController
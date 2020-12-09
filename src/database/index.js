//conexao com o banco
import Sequelize from 'sequelize'

import Instructor from '../app/models/instructor'
import Member from '../app/models/member'

import databaseConfig from '../config/database'

const models = [Instructor, Member]

class Database {
    constructor(){
        this.init()
        Member.associate(this.connection.models)
        Instructor.associate(this.connection.models)
    }
    init(){
        this.connection = new Sequelize(databaseConfig)
        
        models.map(model => model.init(this.connection))

    }
}

export default new Database()
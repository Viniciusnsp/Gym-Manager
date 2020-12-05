//conexao com o banco
import Sequelize from 'sequelize'

import Instructor from '../app/models/instructor'

import databaseConfig from '../config/database'

const models = [Instructor]

class Database {
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(databaseConfig)

        models.map(model => model.init(this.connection))

    }
}

export default new Database()
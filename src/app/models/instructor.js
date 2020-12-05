import Sequelize, { Model } from 'sequelize'

class Instructor extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            gender: Sequelize.STRING,
            services: Sequelize.STRING,
        },
        {
            sequelize,
        })
    }
}

export default Instructor
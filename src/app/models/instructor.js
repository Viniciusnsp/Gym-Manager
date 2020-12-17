import Sequelize, { Model } from 'sequelize'

class Instructor extends Model {
    static init(sequelize) {
        super.init({
            avatar_url: Sequelize.STRING,
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
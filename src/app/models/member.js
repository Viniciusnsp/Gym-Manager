import Sequelize, { Model } from 'sequelize'

class Member extends Model {
    static init(sequelize) {
        super.init({
            avatar_url: Sequelize.STRING,
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            gender: Sequelize.STRING,
            height : Sequelize.INTEGER,
            weight : Sequelize.INTEGER,
        },
        {
            sequelize,
        })
    }
}

export default Member
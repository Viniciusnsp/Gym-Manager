module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'database',
    password: 'docker',
    database: 'gym_manager',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
}
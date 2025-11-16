const { Sequelize, DataTypes } = require('sequelize');
const isTestEnv = process.env.NODE_ENV === 'test';


let sequelize = undefined;

if (isTestEnv) {
  sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: ':memory:',
        logging: false
  });
}
else {
  sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
        process.env.DB_USER || 'postgres',
        process.env.DB_PASSWORD || '',
        {
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 5432,
            dialect: 'postgres',
            dialectOptions: {
                ssl: process.env.DB_SSL == "true"
            }
        });

}

const Person = sequelize.define('Person', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    }
});
module.exports = {
    sequelize: sequelize,
    Person: Person
};

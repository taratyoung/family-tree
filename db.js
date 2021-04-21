//https://sequelize.org/master/manual/getting-started.html#testing-the-connection

//connects to database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('family-tree', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const Person = sequelize.import('./models/person.js')
const Relationship = sequelize.import('./models/relationship.js')

// Person.hasOne(Person, { as: 'Mother' })
// Person.hasOne(Person, { as: 'Father' })
Person.belongsToMany(Person, { as: 'children', through: 'offspring' })

Person.belongsToMany(Relationship, { through: 'relationshipMember' })
Relationship.belongsToMany(Person, { through: 'relationshipMember' })

//verify to test if connection is ok
sequelize.authenticate()
    .then(
        function () {
            console.log('Connected to family-tree postgres database');
        },
        function (err) {
            console.log('Unable to connect to the family-tree database:', err);
        }
    );

module.exports = sequelize;

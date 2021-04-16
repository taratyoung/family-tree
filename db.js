//https://sequelize.org/master/manual/getting-started.html#testing-the-connection

//connects to database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('family-tree', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

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

module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('person', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        maidenName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sunrise: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        sunset: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        birthplace: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Person;
};
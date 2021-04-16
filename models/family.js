module.exports = (sequelize, DataTypes) => {
    const Family = sequelize.define('family', {
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
        },
        mother: {
            type: DataTypes.STRING,
            allowNull: false
        },
        father: {
            type: DataTypes.STRING,
            allowNull: false
        },
        spouse: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // gender: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        child: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Family;
};
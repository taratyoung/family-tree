module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', { //will be a table named 'users' - in Postgres (the table names are pluralized).
        email: { //here's where the columns are being defined - email & password
            type: DataTypes.STRING,
            allowNull: false,
            unique: true //optional property that means all data (in this case all emails) must be unique and you cannot have any duplicates.
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return User;
}
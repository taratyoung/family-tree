module.exports = (sequelize, DataTypes) => {
    const Relationship = sequelize.define('relationship', {
        marriageDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        divorceDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },

    })
    return Relationship;
};
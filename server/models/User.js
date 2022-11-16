const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        donation: {
            type: DataTypes.MEDIUMINT,
            allowNull: false
        }
    });

    Users.beforeCreate(async (user) => {
        return user.id = uuidv4();
    })

    return Users;
}
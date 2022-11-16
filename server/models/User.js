const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        donation: {
            type: DataTypes.MEDIUMINT,
            allowNull: false
        }
    });

    Users.beforeCreate(async (user) => {
        return user.id = uuid();
    })

    return Users;
}
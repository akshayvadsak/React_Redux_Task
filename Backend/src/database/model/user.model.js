const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const User = sequelize.define('User', {
        USER_ID: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        EMAIL: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Must be an email unique",
                }
            },
        },
        PASSWORD: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CREATE_DATE: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        UPDATE_DATE: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, { tableName: 'USER' });
    return User;
};

const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../data/db");

const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true});

async function sync(){
    await User.sync({alter: true});

}

sync();

module.exports = User;

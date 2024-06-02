const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const Session = sequelize.define('Session', {
    sid: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    expires: {
        type: DataTypes.DATE,
    },
    data: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: false,
    tableName: 'Sessions'
});

async function sync() {
    await Session.sync({ alter: true });
}

sync();

module.exports = Session;

const { DataTypes } = require('sequelize');
const sequelize = require('../data/db');

const Session = sequelize.define('Session', {
    sid: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false, // Sid değeri boş olamaz
    },
    expires: {
        type: DataTypes.DATE,
        allowNull: false, // Expires değeri boş olamaz
    },
    data: {
        type: DataTypes.TEXT,
        allowNull: false, // Data değeri boş olamaz
    },
}, {
    timestamps: false,
    tableName: 'Sessions'
});

async function sync() {
    await Session.sync({ force: false }); // force: false kullanarak tabloyu her seferinde yeniden oluşturmayı engelliyoruz
}

sync();

module.exports = Session;

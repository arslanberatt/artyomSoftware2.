const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Sertifika = sequelize.define("sertifika", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sertifika:{
        type: DataTypes.STRING,
        allowNull: true
    }
});

async function sync() {
    await Sertifika.sync({ force: true });

    const count = await Sertifika.count();
    if (count == 0) {
        await Sertifika.create({ sertifika: "JAVA ile Programlamaya Giriş Sertifikası - BTK Akademi" });
        await Sertifika.create({ sertifika: "Javascript Temelleri Sertifikası - BTK Akademi" });
    }
}

sync();

module.exports = Sertifika;
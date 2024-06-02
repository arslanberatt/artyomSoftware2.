const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Profil = sequelize.define("profil", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    pozisyon: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nick:{
        type: DataTypes.STRING,
        allowNull: true
    },
    resim:{
        type: DataTypes.STRING,
        allowNull: true
    }
});

async function sync(){
    await Profil.sync({alter: true});

        const count = await Profil.count();
        if(count == 0){
            await Profil.bulkCreate({
                pozisyon:"Full-Stack Developer",
                nick:"Artyom",
                instagram:"a.jpeg"
            })
        }
}

sync();

module.exports = Profil;
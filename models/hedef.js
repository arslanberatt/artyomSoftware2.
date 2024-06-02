const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Hedef = sequelize.define("hedef", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    baslik: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    baslik2:{
        type: DataTypes.STRING,
        allowNull: true
    },
    hedef:{
        type: DataTypes.STRING,
        allowNull: true
    },
    done:{
        type: DataTypes.STRING,
        allowNull: true
    },
    ilerleme:{
        type: DataTypes.STRING,
        allowNull: true
    },
});

async function sync(){
    await Hedef.sync({alter: true});

        const count = await Hedef.count();
        if(count == 0){
            await Hedef.create({
                baslik:"Yıllık Hedef",
                baslik2:"Projeler ve Denemeler",
                hedef:"10",
                done:"4",
                ilerleme:"40",
            })
        }
}

sync();

module.exports = Hedef;
const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Link = sequelize.define("link", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    website: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    github:{
        type: DataTypes.STRING,
        allowNull: false
    },
    linkedin:{
        type: DataTypes.STRING,
        allowNull: true
    },
    instagram:{
        type: DataTypes.STRING,
        allowNull: true
    }
});

async function sync(){
    await Link.sync({alter: true});

        const count = await Link.count();
        if(count == 0){
            await Link.bulkCreate({
                website:"artyomsoftware.com",
                github:"arslanberatt",
                linkedin:"berat-arslan",
                instagram:"artyomsoftware"
            })
        }
}

sync();

module.exports = Link;
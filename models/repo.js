const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Repo = sequelize.define("repo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: true
    },
    feature1:{
        type: DataTypes.STRING,
        allowNull: true
    },
    feature2:{
        type: DataTypes.STRING,
        allowNull: true
    },
    github:{
        type: DataTypes.STRING,
        allowNull: true
    },
    web:{
        type: DataTypes.STRING,
        allowNull: true
    },
    imageUrl:{
        type: DataTypes.STRING,
        allowNull: true
    },
    main:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    }

});

async function sync(){
    await Repo.sync({force: true});

        const count = await Repo.count();
        if(count == 0){
            await Repo.create({
                name:"Uzm. Kl. Psk. Derya Arslan",
                type:"Dinamik Website",
                feature1:"Admin Paneli",
                feature2:"NodeJs ve mongoDb tabanlı",
                github:"https://github.com/arslanberatt/uzmklpskderyaarslan",
                web:"https://uzmklpskderyaarslan-1.onrender.com",
                imageUrl:"1.jpg",
                main:true,
                isActive:true
            })

            await Repo.create({
                name:"Artyom Software",
                type:"Dinamik Website",
                feature1:"Admin Paneli",
                feature2:"NodeJs ve MySQL tabanlı",
                github:"https://github.com/arslanberatt/artyomsoftware",
                web:"artyomsoftware.com",
                imageUrl:"websayfam.png",
                main:true,
                isActive:true
            })
        }
}
sync();


module.exports = Repo;
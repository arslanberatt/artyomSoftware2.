const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Anasayfa = sequelize.define("anasayfa", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    hakkimdaMain: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    java:{
        type: DataTypes.STRING,
        allowNull: true
    },
    javascript:{
        type: DataTypes.STRING,
        allowNull: true
    },
    css: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    html:{
        type: DataTypes.STRING,
        allowNull: true
    },
    node:{
        type: DataTypes.STRING,
        allowNull: true
    },
    mysql:{
        type: DataTypes.STRING,
        allowNull: true
    },
    mongo:{
        type: DataTypes.STRING,
        allowNull: true
    },
    egitim:{
        type: DataTypes.TEXT,
        allowNull: true
    },
});

async function sync(){
    await Anasayfa.sync({alter: true});

        const count = await Anasayfa.count();
        if(count == 0){
            await Anasayfa.bulkCreate({
                hakkimdaMain:"Ben Muhammet Berat Arslan. Bilgisayar Mühendisliği öğrencisi olarak full stack web geliştirme konusunda kendimi geliştirmekteyim. Hem frontend (kullanıcı arayüzü) hem de backend (sunucu tarafı) teknolojilerinde deneyim kazanarak kapsamlı bir web geliştirme yetkinliği elde etmeyi hedefliyorum. İleri düzey projelerde çalışarak, hem teknik bilgimi artırmayı hem de kullanıcı odaklı çözümler üretmeyi amaçlıyorum.",
                java:"43",
                javascript:"56",
                css:"89",
                html:"95",
                node:"59",
                mysql:"53",
                mongo:"45",
                egitim:"Topkapı Üniversitesi'nde Bilgisayar Mühendisliği eğitimimle temel bilgisayar bilimi konularını öğrendim ve belediye kursları ile web geliştirme becerilerimi güçlendirdim. Çevrimiçi platformlardaki kurslarla ileri düzey bilgi edindim. Şimdi, web geliştirme kariyerim için sağlam bir temele sahibim ve sürekli öğrenmeye devam ediyorum.",
            })
        }
}

sync();

module.exports = Anasayfa;
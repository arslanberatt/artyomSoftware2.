const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Iletisim = sequelize.define("iletisim", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    aciklama: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    proje1:{
        type: DataTypes.STRING,
        allowNull: true
    },
    proje2:{
        type: DataTypes.STRING,
        allowNull: true
    },
    proje3:{
        type: DataTypes.STRING,
        allowNull: true
    },
    mail:{
        type: DataTypes.STRING,
        allowNull: true
    },
    mail2:{
        type: DataTypes.STRING,
        allowNull: true
    },
    telefon:{
        type: DataTypes.STRING,
        allowNull: true
    }
});

async function sync(){
    await Iletisim.sync({alter: true});

        const count = await Iletisim.count();
        if(count == 0){
            await Iletisim.bulkCreate({
                aciklama:"Artyom Software, web uygulamalarınızı hayata geçirmek için tam donanımlı bir full stack web geliştirme hizmeti sunar. Müşteri odaklı yaklaşımımızla, ihtiyaçlarınıza uygun çözümler üretir ve projenizin her adımında size rehberlik ederiz. Güvenilirlik, kalite ve müşteri memnuniyeti bizim önceliğimizdir. İşletmenizi dijital dünyada ileri taşımak için bugün bizimle iletişime geçin!",
                proje1:"Artyom Software",
                proje2:"Uzm. Kl. Psk. Derya Arslan",
                proje3:"Senin Projen...",
                mail:"arslanberatt@hotmail.com",
                mail2:"muhammetberatarslan@stu.topkapi.edu.tr",
                telefon:"+905442518830"
            })
        }
}

sync();

module.exports = Iletisim;
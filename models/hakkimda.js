const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Hakkimda= sequelize.define('Hakkimda', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    hakkimda1: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    hakkimda2: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    bs5: {
        type: DataTypes.STRING,
        allowNull: true
    },
    react: {
        type: DataTypes.STRING,
        allowNull: true
    },
    angular: {
        type: DataTypes.STRING,
        allowNull: true
    },
    spring: {
        type: DataTypes.STRING,
        allowNull: true
    },
    netbeans: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
});



async function sync(){
    await Hakkimda.sync({alter: true});

        const count = await Hakkimda.count();
        if(count == 0){
            await Hakkimda.bulkCreate({
                hakkimda1:"<h1>Web Geliştirme Yolculuğum</h1><p>Merhaba, ben Muhammet Berat Arslan. Bilgisayar Mühendisliği bölümü öğrencisiyim ve web geliştirme alanında tutkulu bir öğrenci olarak kendimi sürekli geliştirmeye odaklanıyorum. Bu yazıda, aldığım eğitimleri ve sahip olduğum sertifikaları paylaşarak web geliştirme yolculuğumu sizinle paylaşmak istiyorum.</p><h2>Bilgisayar Mühendisliği Eğitimi</h2><p>Topkapı Üniversitesi'nde Bilgisayar Mühendisliği bölümünde okuyorum. Bu program boyunca, temel bilgisayar bilimi konularıyla birlikte programlama, algoritma analizi, veri yapıları gibi dersler aldım. Bu dersler, bilgisayar bilimlerine sağlam bir temel oluştururken, aynı zamanda yazılım geliştirme becerilerimi de geliştirmeme yardımcı oldu.</p><h2>Belediye Kaynaklı Kurslar</h2><p>Üniversite eğitiminin yanı sıra, web geliştirme alanında kendimi geliştirmek için çeşitli belediye kaynaklı kurslara katıldım. Bu kurslar, HTML, CSS, JavaScript gibi temel web teknolojilerini öğrenme ve uygulamalı projeler üzerinde çalışma fırsatı sundu. Katıldığım kurslardan aldığım sertifikalar, bilgi ve becerilerimi kanıtlamama yardımcı oldu.</p>",
                hakkimda2:"<h2>Eğitim Odaklı Siteler</h2><p>Ayrıca, çeşitli eğitim odaklı sitelerden çevrimiçi kurslar takip ettim ve başarıyla tamamladım. Bu kurslar aracılığıyla, web geliştirme alanında derinlemesine bilgi edinme ve ileri düzey konuları öğrenme fırsatı buldum. Aldığım sertifikalar, bu konudaki bilgi ve deneyimimi belgelememe yardımcı oldu.</p><h2>Sonuç</h2><p>Topkapı Üniversitesi'ndeki bilgisayar mühendisliği eğitimi, belediye kaynaklı kurslar ve çevrimiçi eğitim sitelerinden aldığım kurslar, web geliştirme kariyerimde sağlam bir temel oluşturmama yardımcı oldu. Bu eğitimler sayesinde, hem teorik bilgiye sahip oldum hem de uygulamalı projeler üzerinde çalışarak becerilerimi geliştirdim. Gelecekteki kariyer hedeflerim doğrultusunda, kendimi sürekli olarak geliştirmeye ve yeni şeyler öğrenmeye devam edeceğim.</p>",
                bs5:"93",
                react:"26",
                angular:"19",
                spring:"45",
                netbeans:"37",
                image:"2-1716571678227.jpeg",
            })
        }
}

sync();

module.exports = Hakkimda;
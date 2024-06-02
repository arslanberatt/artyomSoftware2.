const fs = require('fs');
const Anasayfa = require("../models/anasayfa");
const Hakkimda = require("../models/hakkimda");
const Hedef = require("../models/hedef");
const Iletisim = require("../models/iletisim");
const Link = require("../models/link");
const Profil = require("../models/profil");
const Sertifika = require("../models/sertifika");
const Repo = require("../models/repo");

exports.getAnasayfa = async (req, res) => {
    try {
        const anasayfa = await Anasayfa.findOne();
        if (!anasayfa) {
            return res.status(404).send('Kayıt bulunamadı');
        }
        res.render('admin/anasayfaEdit', {
            title: "Anasayfa Güncelle",
            anasayfa: anasayfa
        });
        console.log(anasayfa)
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postAnasayfa = async (req, res) => {
    const hakkimdaMain = req.body.hakkimdaMain;
    const hakkimdaMain2 = req.body.hakkimdaMain2;
    const java = req.body.java;
    const javascript = req.body.javascript;
    const css = req.body.css;
    const html = req.body.html;
    const node = req.body.node;
    const mysql = req.body.mysql;
    const mongo = req.body.mongo;
    const egitim = req.body.egitim;
    
    try {
        const anasayfa = await Anasayfa.findOne();
        
        if (!anasayfa) {
            return res.status(404).send('Kayıt bulunamadı');
        }

        anasayfa.hakkimdaMain = hakkimdaMain;
        anasayfa.hakkimdaMain2 = hakkimdaMain2;
        anasayfa.java = java;
        anasayfa.javascript = javascript;
        anasayfa.css = css;
        anasayfa.html = html;
        anasayfa.node = node;
        anasayfa.mysql = mysql;
        anasayfa.mongo = mongo;
        anasayfa.egitim = egitim;

        await anasayfa.save();
        return res.redirect("/admin/panel");
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getHakkimda = async (req, res) => {
    try {
        const hakkimda = await Hakkimda.findOne();
        if (!hakkimda) {
            return res.status(404).send('Kayıt bulunamadı');
        }
        res.render('admin/hakkimdaEdit', {
            title: "Hakkımda Güncelle",
            hakkimda: hakkimda
        });
        console.log(hakkimda)
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postHakkimda = async (req, res) => {
    const hakkimda1 = req.body.hakkimda1;
    const hakkimda2 = req.body.hakkimda2;
    const bs5 = req.body.bs5;
    const react = req.body.react;
    const angular = req.body.angular;
    const spring = req.body.spring;
    let image = req.body.image;

    try {
        const hakkimda = await Hakkimda.findOne();
        
        if (!hakkimda) {
            return res.status(404).send('Kayıt bulunamadı');
        }

        hakkimda.hakkimda1 = hakkimda1;
        hakkimda.hakkimda2 = hakkimda2;
        hakkimda.bs5 = bs5;
        hakkimda.react = react;
        hakkimda.angular = angular;
        hakkimda.spring = spring;

        if (req.file) {
            const eskiResimAdi = hakkimda.image;

            hakkimda.image = req.file.filename;

            fs.unlink("./public/images/" + eskiResimAdi, err => {
                if (err) {
                    console.log("Eski resim silinirken hata oluştu:", err);
                }
            });
        }

        await hakkimda.save();
        return res.redirect("/admin/panel");
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getHedef = async (req, res) => {
    try {
        const hedef = await Hedef.findOne(); // Tek bir kayıt alır
        if (!hedef) {
            return res.status(404).send('Kayıt bulunamadı');
        }
        res.render('admin/hedefEdit', {
            title: "Hedef Güncelle",
            hedef: hedef
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postHedef = async (req, res) => {
    const baslik = req.body.baslik;
    const baslik2 = req.body.baslik2;
    const hedef = req.body.hedef;
    const done = req.body.done;
    const ilerleme = req.body.ilerleme;
    
    try {
        const hedefRecord = await Hedef.findOne(); 

        if (!hedefRecord) {
            return res.status(404).send('Kayıt bulunamadı');
        }

        hedefRecord.baslik = baslik;
        hedefRecord.baslik2 = baslik2;
        hedefRecord.hedef = hedef;
        hedefRecord.done = done;
        hedefRecord.ilerleme = ilerleme;

        await hedefRecord.save();
        return res.redirect("/admin/panel");
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getProfil = async (req, res) => {
    try {
        const profil = await Profil.findOne(); 
        if (!profil) {
            return res.status(404).send('Kayıt bulunamadı');
        }
        res.render('admin/profilEdit', {
            title: "Profil Güncelle",
            profil: profil
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postProfil = async (req, res) => {
    const pozisyon = req.body.pozisyon;
    const nick = req.body.nick;
    let resim = req.body.resim;

    if(req.file) {
        resim = req.file.filename;

        fs.unlink("./public/images/" + req.body.resim, err => {
            console.log(err);
        });
    }

    try {
        const profil = await Profil.findOne(); 
        
        if (!profil) {
            return res.status(404).send('Profil bulunamadı');
        }
        profil.pozisyon = pozisyon;
        profil.nick = nick;
        profil.resim = resim
        

        await profil.save();
        return res.redirect("/admin/panel");
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getLink = async (req, res) => {
    try {
        const link = await Link.findOne();
        if (!link) {
            return res.status(404).send('Kayıt bulunamadı');
        }
        res.render('admin/linkEdit', {
            title: "Link Güncelle",
            link: link
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postLink = async (req, res) => {
    const website = req.body.website;
    const github = req.body.github;
    const linkedin = req.body.linkedin;
    const instagram = req.body.instagram;
    
    try {
        const link = await Link.findOne();
        
        if (!link) {
            return res.status(404).send('Kayıt bulunamadı');
        }

        link.website = website;
        link.github = github;
        link.linkedin = linkedin;
        link.instagram = instagram;

        await link.save();
        return res.redirect("/admin/panel");
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getIletisim = async (req, res) => {
    try {
        const iletisim = await Iletisim.findOne(); // Tek bir kayıt alır
        if (!iletisim) {
            return res.status(404).send('Kayıt bulunamadı');
        }
        res.render('admin/iletisimEdit', {
            title: "İletişim Güncelle",
            iletisim: iletisim
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postIletisim = async (req, res) => {
    const aciklama = req.body.aciklama;
    const proje1 = req.body.proje1;
    const proje2 = req.body.proje2;
    const proje3 = req.body.proje3;
    const mail = req.body.mail;
    const mail2 = req.body.mail2;
    const telefon = req.body.telefon;

    try {
        const iletisimRecord = await Iletisim.findOne();

        if (!iletisimRecord) {
            return res.status(404).send('Kayıt bulunamadı');
        }

        iletisimRecord.aciklama = aciklama;
        iletisimRecord.proje1 = proje1;
        iletisimRecord.proje2 = proje2;
        iletisimRecord.proje3 = proje3;
        iletisimRecord.mail = mail;
        iletisimRecord.mail2 = mail2;
        iletisimRecord.telefon = telefon;

        await iletisimRecord.save();
        return res.redirect("/admin/panel");

    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getRepoCreate = async (req, res) => {
    try {
        res.render('admin/repoCreate', {
            title: "Repo Ekle"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postRepoCreate = async (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const feature1 = req.body.feature1;
    const feature2 = req.body.feature2;
    const github = req.body.github;
    const web = req.body.web;

    if (!req.file) {
        return res.status(400).send('Resim yüklenmedi');
    }

    const imageUrl = req.file.filename;
    const main = req.body.main === 'on' ? 1 : 0;
    const isActive = req.body.isActive === 'on' ? 1 : 0;

    try {
        await Repo.create({
            name: name,
            type: type,
            feature1: feature1,
            feature2: feature2,
            github: github,
            web: web,
            imageUrl: imageUrl,
            main: main,
            isActive: isActive
        });

        return res.redirect("/admin/repolist");
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getRepoList = async (req, res) => {
    try {
        const id = req.params.id;
        const repos = await Repo.findByPk(id);
        if (!repos) {
            return res.status(404).send('Kayıt bulunamadı');
        }
        res.render('admin/repoEdit', {
            title: "Repo Güncelle",
            repos: repos
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postRepoList = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const type = req.body.type;
    const feature1 = req.body.feature1;
    const feature2 = req.body.feature2;
    const github = req.body.github;
    const web = req.body.web;
    const main = req.body.main;
    const isActive = req.body.isActive;


    try {
        const repos = await Repo.findByPk(id);

        if (!repos) {
            return res.status(404).send('Kayıt bulunamadı');
        }

        repos.name = name;
        repos.type = type;
        repos.feature1 = feature1;
        repos.feature2 = feature2;
        repos.github = github;
        repos.web = web;
        repos.main = main === 'true';
        repos.isActive = isActive === 'true';

        // Resim güncellenmişse, eski resmi sil
        if (req.file) {
            // Eski resmin adını alın
            const eskiResimAdi = repos.imageUrl;

            // Yeni resmin adını kaydedin
            repos.imageUrl = req.file.filename;

            // Eski resmi sil
            fs.unlink("./public/images/" + eskiResimAdi, err => {
                if (err) {
                    console.log("Eski resim silinirken hata oluştu:", err);
                }
            });
        }

        await repos.save();
        return res.redirect("/admin/repolist");

    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getRepoDelete = async function(req, res){
    const id = req.params.id;

    try {
        const repos = await Repo.findByPk(id);
        if(repos) {
            return res.render('admin/repodelete', {
                title: "Repo Silme",
                repos: repos
            }); 
        }
        res.redirect("/admin/repolist"); 
    }
    catch(err) {
        console.log(err);
    }
}
exports.postRepoDelete = async function(req, res){
    const id = req.params.id;

    try {
        const repos = await Repo.findByPk(id);
        if(repos) {
            const imageFileName = repos.imageUrl;
            
            await repos.destroy();

            const imagePath = "./public/images/" + imageFileName;

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log("Fotoğraf silinemedi:", err);
                }
            });

            return res.redirect("/admin/repolist");
        }
        res.redirect("/admin/repolist"); 
    }
    catch(err) {
        console.log(err);
    }
}

exports.getRepos = async (req, res) => {
    try {
        const repos = await Repo.findAll();
        
        res.render('admin/repolist', {
            title: "Repo Listesi",
            repos: repos
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getSertifika = async (req, res) => {
    try {
        res.render('admin/sertifika', {
            title: "Sertifika Ekle"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.postSertifika = async (req, res) => {
    const sertifika = req.body.sertifika;
    try {
        await Sertifika.create({ sertifika: sertifika }); 
        res.redirect('/admin/sertifikalist'); 
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}

exports.getSertifikaDelete = async function(req, res) {
    const id = req.params.id;

    try {
        const sertifika = await Sertifika.findByPk(id);
        if (sertifika) {
            return res.render("admin/sertifikadelete", {
                title: "Sertifika Silme",
                sertifika: sertifika
            });
        }
        res.redirect("/admin/sertifikalist");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
exports.postSertifikaDelete = async function(req, res) {
    const id = req.params.id;

    try {
        const sertifika = await Sertifika.findByPk(id);
        if (sertifika) {
            const filePath = "./public/sertifikalar/" + sertifika.dosyaAdi;

            fs.unlink(filePath, async (err) => {
                if (err) {
                    console.log("Dosya silinirken hata oluştu:", err);
                }

                await sertifika.destroy();

                res.redirect("/admin/sertifikalist");
            });
        } else {
            res.redirect("/admin/sertifikalist");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}

exports.getSertifikaList = async (req, res) => {
    try {
        const sertifika = await Sertifika.findAll(); 
        res.render('admin/sertifikalist', {
            title: "Sertifika Listesi",
            sertifika: sertifika 
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
exports.getPanel = async (req, res) => {
    console.log(req.session)
    try {
        res.render('admin/panel', {
            title: "Panel",
            isAuth: req.session.isAuth
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Sunucu hatası');
    }
}
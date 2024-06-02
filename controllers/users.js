const Anasayfa = require("../models/anasayfa");
const Hakkimda = require("../models/hakkimda");
const Hedef = require("../models/hedef");
const Iletisim = require("../models/iletisim");
const Link = require("../models/link");
const Profil = require("../models/profil");
const Sertifika = require("../models/sertifika");
const Repo = require("../models/repo");

exports.projelerim = async function(req, res) {
    try {
        const iletisim = await Iletisim.findOne({ raw: true });
        const repos = await Repo.findAll({ raw: true });
        res.render("users/projelerim", {
            title: "Projelerim",
            iletisim: iletisim,
            repos:repos
        });
    } catch(err) {
        next(err);
    }
}

exports.hakkimda = async function(req, res) {
    try {
        const anasayfa = await Anasayfa.findOne({ raw: true });
        const hakkimda = await Hakkimda.findOne({ raw: true });
        const iletisim = await Iletisim.findOne({ raw: true });
        const link = await Link.findOne({ raw: true });
        const repos = await Repo.findAll({ raw: true });
        const sertifika = await Sertifika.findAll({ raw: true });
        res.render("users/hakkimda", {
            title: "Hakkımda",
            anasayfa: anasayfa,
            hakkimda: hakkimda,
            iletisim: iletisim,
            link: link,
            repos: repos,
            sertifika: sertifika,
        });
    } catch(err) {
        next(err);
    }
}

exports.anasayfa =  async function(req, res) {
    try {
        const anasayfa = await Anasayfa.findOne({ raw: true });
        const hedef = await Hedef.findOne({ raw: true });
        const iletisim = await Iletisim.findOne({ raw: true });
        const profil = await Profil.findOne({ raw: true });
        const repos = await Repo.findAll({ raw: true });
        res.render("users/anasayfa", {
            title: "Ana Sayfa",
            anasayfa: anasayfa,
            hedef: hedef,
            iletisim: iletisim,
            profil: profil,
            repos:repos,
        });
    } catch(err) {
        next(err);
    }
}
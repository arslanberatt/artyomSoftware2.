const express = require('express');
const router = express.Router();

const imageUpload = require("../helpers/imageUpload");
const isAuth = require("../middlewares/auth")
const adminController = require("../controllers/admin")


router.get('/anasayfaedit', isAuth, adminController.getAnasayfa);
router.post('/anasayfaedit', isAuth, adminController.postAnasayfa);


router.get('/hakkimdaedit', isAuth, adminController.getHakkimda);
router.post('/hakkimdaedit', isAuth, imageUpload.upload.single('image'), adminController.postHakkimda);


router.get('/hedefedit', isAuth, adminController.getHedef);
router.post('/hedefedit', isAuth, adminController.postHedef);


router.get('/iletisimedit', isAuth, adminController.getIletisim);
router.post('/iletisimedit', isAuth, adminController.postIletisim);


router.get('/linkedit', isAuth, adminController.getLink);
router.post('/linkedit', isAuth, adminController.postLink);


router.get('/profiledit', isAuth, adminController.getProfil);
router.post('/profiledit', isAuth, imageUpload.upload.single('resim'), adminController.postProfil);


router.get('/repocreate', isAuth, adminController.getRepoCreate);
router.post('/repocreate', isAuth, imageUpload.upload.single('imageUrl'), adminController.postRepoCreate);

router.get('/repolist/:id', isAuth, adminController.getRepoList);
router.post('/repolist/:id', isAuth, imageUpload.upload.single('imageUrl'), adminController.postRepoList);

router.get("/repodelete/:id", isAuth, adminController.getRepoDelete);
router.post("/repodelete/:id", isAuth, adminController.postRepoDelete);

router.get('/repolist', isAuth, adminController.getRepos);


router.get('/sertifika', isAuth, adminController.getSertifika);
router.post('/sertifika', isAuth, adminController.postSertifika);

router.get("/sertifikadelete/:id", isAuth, adminController.getSertifikaDelete);
router.post("/sertifikadelete/:id", isAuth, adminController.postSertifikaDelete);
router.get('/sertifikalist', isAuth, adminController.getSertifikaList);


router.get('/panel', isAuth, adminController.getPanel);

module.exports = router;
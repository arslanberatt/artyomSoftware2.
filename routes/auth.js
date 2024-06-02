const express = require("express")
const router = express.Router();

const authController = require("../controllers/auth");
const logged = require("../middlewares/logged");

router.get("/login", logged, authController.getLogin);
router.post("/login", authController.postLogin);

router.get("/logout", authController.getLogout);

module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users")

router.use("/projelerim", userController.projelerim);
router.use("/hakkimda", userController.hakkimda);
router.use("/", userController.anasayfa);

module.exports = router;
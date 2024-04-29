const express = require("express");
const router = express.Router();
const magicHandsController = require("../controllers/magicHandsController");

// // IMPORT CHECK AUTH
// const checkAuth = require("../helpers/auth").checkAuth;

router.get("/", magicHandsController.showMagic);

module.exports = router;
const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/create", postsCtrl.create);

module.exports = router;

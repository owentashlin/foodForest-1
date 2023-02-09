const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", postsCtrl.index);
router.post("/create", postsCtrl.create);
router.delete("/deleteposts", postsCtrl.deletePosts);

module.exports = router;

const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");


router.get("/", postsCtrl.index);
router.post("/create", postsCtrl.create);
router.delete("/deleteposts", postsCtrl.deletePosts);
router.delete("/:id", postsCtrl.deleteOne);

module.exports = router;

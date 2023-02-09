const Post = require("../../models/post");

module.exports = {
  index,
  create,
  deletePost,
};

async function index(req, res) {
  const result = await Post.find();
  return;
}

async function create(req, res) {
  const result = req.body;
  Post.create(result, function (err) {
    console.log(err);
  });
}

function deletePost(req, res) {
  return;
}

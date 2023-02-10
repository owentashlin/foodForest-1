const Post = require("../../models/post");

module.exports = {
  index,
  create,
  deletePosts,
  deleteOne,
};

async function index(req, res) {
  console.log("getting all posts");
  const result = await Post.find();
  res.json(result);
}

async function create(req, res) {
  const result = req.body;
  Post.create(result, function (err) {
    console.log(err);
  });
}

async function deletePosts(req, res) {
  await Post.deleteMany();
}

async function deleteOne(req, res) {
  await Post.findOneAndDelete(req.params.id);
}

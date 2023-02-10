const Profile = require("../../models/profile");

module.exports = {
  index,
  create,
  deleteProfile,
  update,
};

async function index(req, res) {
  console.log("index is firing");
  const result = await Profile.find({ userId: req.params.id });
  res.json(result);
}

function create(req, res) {
  console.log("creating profile is firing");
  req.body.dateOfBirth = `${req.body.day}/${req.body.month}/${req.body.year}`;
  console.log(req.body.userId);
  delete req.body.day;
  delete req.body.month;
  delete req.body.year;
  Profile.create(req.body, function (err) {
    console.log(err);
  });
}

async function deleteProfile(req, res) {
  await Profile.deleteMany();
}

function update(req, res) {
  return;
}

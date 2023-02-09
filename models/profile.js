const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const postSchema = require("./post");

const profileSchema = new Schema(
  {
    zipCode: { type: Number, required: true },
    username: { type: String, required: true },
    profilePicture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: { type: String },
    imageUrl: {
      type: String,
    },
    content: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    zipCode: {
      type: String,
    },
    price: {
      type: String,
    },
    contactInfo: {
      type: String,
    },
    free: { type: String },
    willingToTrade: { type: String },
    location: {
      type: String,
    },
    dateRange: {
      type: String,
    },
    timeRange: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  blogger: {
    type: String,
    required: true,
  },
  bloggerMail: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: String,
  comments: [
    {
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  approval: Boolean,
});

const blog = new mongoose.model("blog", blogSchema);

module.exports = blog;

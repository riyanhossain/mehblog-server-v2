const express = require("express");
const router = express.Router();
const blog = require("../Models/Schemas/blog");

router.get("/myblogs", async (req, res) => {
  try {
    const blogs = await blog.find({ bloggerMail: req.body.email });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    await blog.updateOne(
      { _id: req.params.id },
      { $set: { comments: req.body.comments } }
    );
    res.status(200).json({
      message: "Comment updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;

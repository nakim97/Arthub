const express = require("express");
const Post = require("../models/post");
const security = require("../middleware/security");
const router = express.Router();

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const post = await Post.createPost({
      user,
      post: req.body,
    });
    return res.status(201).json({ post });
  } catch (err) {
    next(err);
  }
});

router.get("/listPosts", async (req, res, next) => {
  try {
    const posts = await Post.listAllPosts();
    return res.status(200).json({ posts });
  } catch (err) {
    next(err);
  }
});

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // List all minutes
    const { user } = res.locals;
    const postsByMe = await Post.listPhotoPostsForUser({ user });
    return res.status(200).json({ postsByMe });
  } catch (err) {
    next(err);
  }
});
// fetch single product
router.get("/:postsId", async (req, res, next) => {
  try {
    const postsId = req.params.postsId;
    const posting = await Post.fetchPhotoPostById(postsId);
    // console.log("pID", postsId, "p", posts)
    if (!posting) {
      throw new NotFoundError("post not found");
    }
    res.status(200).json({ posting });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

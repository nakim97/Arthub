const express = require("express");
const User = require("../models/user");
const Post = require("../models/post");
const security = require("../middleware/security");
const router = express.Router();

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });
router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const post = await Post.listPhotoPostsForUser({ user });
    return res.status(200).json({ user, post });
  } catch (err) {
    next(err);
  }
});


module.exports = router;

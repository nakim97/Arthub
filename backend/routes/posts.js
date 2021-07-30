const express = require("express");
const Post = require("../models/post");
const Comment = require("../models/photoComments");
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
    // List all posts for user
    const { user } = res.locals;
    const postsByMe = await Post.listPhotoPostsForUser({ user });
    return res.status(200).json({ postsByMe });
  } catch (err) {
    next(err);
  }
});
router.get("/search", async (req, res, next) => {
  try {
    //uses search?q= -str- - you enter the string
    const { q } = req.query;
    const searches = await Post.searchByTitle(q);
    return res.status(200).json({ searches });
  } catch (err) {
    next(err);
  }
});

// fetch single post
router.get("/:postsId", async (req, res, next) => {
  try {
    const postsId = req.params.postsId;
    const posting = await Post.fetchPhotoPostById(postsId);
    // console.log("pID", postsId, "p", posts)
    res.status(200).json({ posting });
  } catch (err) {
    next(err);
  }
});
// delete single post
router.delete("/:postsId", async (req, res, next) => {
  try {
    const postsId = req.params.postsId;
    const posting = await Post.deletePhotoPostById(postsId);
    // console.log("pID", postsId, "p", posts)
    res.status(200).json({ posting });
  } catch (err) {
    next(err);
  }
});

// Photo Post Commenting
// router.get(
//   "/:postsId/comments",
//   security.requireAuthenticatedUser,
//   async (req, res, next) => {
//     try {
//       const { postsId } = req.params.postsId;
//       const { user } = res.locals;
//       const comment = await Comment.createCommentForPost({
//         rating: req.body.comment,
//         user,
//         postsId,
//       });
//       return res.status(201).json({ comment });
//     } catch (err) {
//       next(err);
//     }
//   }
// );
// Photo Post Commenting get
router.get(
  "/:postsId/comments",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      // const { postsId } = req.params.postsId;
      const comments = await Comment.fetchCommentForPostByUser({
        postsId: req.params.postsId,
      });
      //console.log("This is the comments " + comments);
      return res.status(201).json({ comments });
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/:postsId/comments",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      //const { post_id } = req.params.postsId;
      const { user } = res.locals;
      const comment = await Comment.postComment({
        comment_description: req.body.comment,
        user,
        post_id: req.params.postsId,
      });
      //console.log("This is the comment " + comment);
      return res.status(201).json({ comment });
    } catch (err) {
      next(err);
    }
  }
);

// router.post(
//   "/comment",
//   security.requireAuthenticatedUser,
//   async (req, res, next) => {
//     try {
//       const { user } = res.locals;
//       const comment = await Comment.postComment({
//         user,
//         post_id,
//         comment_description: req.body.comment,
//       });
//       return res.status(201).json({ post });
//     } catch (err) {
//       next(err);
//     }
//   }
// );

module.exports = router;

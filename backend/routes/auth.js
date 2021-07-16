const express = require("express");
const User = require("../models/user");
const Post = require("../models/post");
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const router = express.Router();
require("regenerator-runtime/runtime");

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    const token = createUserJwt(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register({ ...req.body, isAdmin: false });
    const token = createUserJwt(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});
router.post("/token/", async function (req, res, next) {
  const { email, password } = req.body;
  //const requiredFields = ["email", "password"];
  // validateFields({ required: requiredFields, obj: req.body, location: "login route" });
  const user = await User.login({ email, password });
  const token = createUserJwt(user);
  return res.status(200).json({ user, token });
});
// Add middleware before response is sent to get the user
router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);

    const publicUser = User.makePublicUser(user);
    return res.status(200).json({ user: publicUser });
  } catch (err) {
    next(err);
  }
});

/************************ Development testing routes  *******/
router.get("/test", async (req, res, next) => {
  try {
    const test = Post.listAllPosts();
    return res.status(201).json({test});
  } catch (err) {
    next(err);
  }
});
// router.get("/test", async (req, res, next) => {
//   try {
//     const test = Post.listPhotoPostsForUser();
//     return res.status(201).json({test});
//   } catch (err) {
//     next(err);
//   }
// });
router.post("/test", async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log(id)
    const test = await Post.fetchPhotoPostById(id);
    return res.status(201).json({test});
  } catch (err) {
    next(err);
  }
});
// router.post("/test", async (req, res, next) => {
//   try {
//     const { id } = req.body;
//     const test = await User.fetchUserById(id);
//     return res.status(201).json({test});
//   } catch (err) {
//     next(err);
//   }
// });
// PUT: Update movie by movieId from the database
// app.put('/update-movie', (req, res) => {
//   db('movies')
//       .where('movie_id', '=', 1)
//       .update({ movie_name: 'Goldeneye' })
//       .then(() => {
//           console.log('Movie Updated');
//           return res.json({ msg: 'Movie Updated' });
//       })
//       .catch((err) => {
//           console.log(err);
//       });
// });

module.exports = router;

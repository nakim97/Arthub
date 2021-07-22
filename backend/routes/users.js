const express = require("express");
const User = require("../models/user");
const security = require("../middleware/security");
const router = express.Router();

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// Add middleware before response is sent to get the user
router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
});


module.exports = router;

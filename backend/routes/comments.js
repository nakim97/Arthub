const express = require("express");
const photoComments = require("../models/photoComments");
const security = require("../middleware/security");
const router = express.Router();

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // Create a new comment
    // Call the createExercise method
    const { user } = res.locals;
    const exercise = await photoComments.postComment({
      user,
      comments: req.body,
    });
    return res.status(201).json({});
  } catch (err) {
    next(err);
  }
});

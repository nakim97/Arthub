const express = require("express");
const Exercise = require("../models/exercise");
const security = require("../middleware/security");
const router = express.Router();

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // Create a new exercise
    // Call the createExercise method
    const { user } = res.locals;
    const exercise = await Exercise.createExercise({
      user,
      exercise: req.body,
    });
    return res.status(201).json({ exercise });
  } catch (err) {
    next(err);
  }
});

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // List all exercises
    // call the listExercisesForUser from the Exercise model
    const { user } = res.locals;

    const exercises = await Exercise.listExercisesForUser({ user });
    return res.status(200).json({ exercises });
  } catch (err) {
    next(err);
  }
});

router.get(
  "/minute",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      // List all minutes
      const { user } = res.locals;

      const minutes = await Exercise.listExerciseMinutes({ user });
      return res.status(200).json({ minutes });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;

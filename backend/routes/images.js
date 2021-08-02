const express = require("express");
const Image = require("../models/image");
const security = require("../middleware/security");
const router = express.Router();

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // List all images
    const { user } = res.locals;
    const images = await Image.listImagesForUser({ user });
    return res.status(200).json({ images });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // Create a new image
    // Call the createImage method
    const { user } = res.locals;
    const image = await Image.createImage({
      user,
      image: req.body,
    });
    return res.status(201).json({ image });
  } catch (err) {
    next(err);
  }
});

router.get("/forum", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // List all images
    const { user } = res.locals;
    const images = await Image.listForumImagesForUser({ user });
    return res.status(200).json({ images });
  } catch (err) {
    next(err);
  }
});

router.post("/forum", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // Create a new image
    // Call the createImage method
    const { user } = res.locals;
    const image = await Image.createForumImage({
      user,
      image: req.body,
    });
    return res.status(201).json({ image });
  } catch (err) {
    next(err);
  }
});
module.exports = router;

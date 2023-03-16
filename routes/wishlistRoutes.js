const express = require("express");

const router = express.Router();
const wishlistController = require("./../controllers/wishlistController");

router
  .route("/")
  .get(wishlistController.getAllComicBooks)
  .post(wishlistController.createComicBook);

router
  .route("/:id")
  .get(wishlistController.getComicBook)
  .delete(wishlistController.deleteComicBook)

  .patch(wishlistController.updateComicBook);

module.exports = router;

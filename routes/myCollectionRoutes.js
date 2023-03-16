const express = require("express");

const router = express.Router();
const mycollectionController = require("./../controllers/myCollectionController");

router
  .route("/")
  .get(mycollectionController.getAllComicBooks)
  .post(mycollectionController.createComicBook);

router
  .route("/:id")
  .get(mycollectionController.getComicBook)
  .delete(mycollectionController.deleteComicBook)

  .patch(mycollectionController.updateComicBook);

module.exports = router;

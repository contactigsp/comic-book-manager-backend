const mongoose = require("mongoose");
const MyCollection = require("../models/myCollectionModel");

// GET ALL COMIC BOOKS

exports.getAllComicBooks = async (req, res) => {
  try {
    const mycollection = await MyCollection.find().sort({ createdAt: -1 });
    res.status(200).json(
      // status: "success",
      // message: "Here's your collection !!!",
      mycollection
    );
  } catch (error) {
    console.log(error);
  }
};

// CREATE A NEW COMIC BOOK

exports.createComicBook = async (req, res) => {
  try {
    const newComicBook = await MyCollection.create(req.body);
    res.status(201).json({
      // status: "success",
      // message: "Your comic book was successfully created !!!",
      newComicBook
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      message: "something went wrong, try again later :(",
    });
  }
};

// GET A SINGLE COMIC BOOK

exports.getComicBook = async (req, res) => {
  try {
    const comicBook = await MyCollection.findById(req.params.id);

    if (!comicBook /*means not null */) {
      throw new Error("Comic book not found in db lol");
    } else {
      res.status(200).json({
        // status: "success",
        // message: "Here's your comic book from your collection !!!",
        comicBook
      });
    }
  } catch (error) {
    if (
      !mongoose.Types.ObjectId.isValid(req.params.id) ||
      error.message === "Comic book not found in db lol"
    ) {
      return res.status(404).json({
        status: "Not found",
        message: "Comic book not found in db lol",
      });
    } else {
      console.log(error);
      res.status(400).json({
        status: "fail",
        message: "Something went wrong",
      });
    }
  }
};

// DELETE A COMIC BOOK

exports.deleteComicBook = async (req, res) => {
  try {
    const comicBook = await MyCollection.findByIdAndDelete(req.params.id);

    if (!comicBook /*means not null */) {
      throw new Error("Comic book not found in db");
    } else {
      res.status(200).json(
        // status: "success",
        // message: "Your comic book was successfully deleted",
        comicBook
      );
    }
  } catch (error) {
    if (
      !mongoose.Types.ObjectId.isValid(req.params.id) ||
      error.message === "Comic book not found in db"
    ) {
      return res.status(404).json({
        status: "Not found",
        message: "Comic book not found in db",
      });
    } else {
      console.log(error);
      res.status(400).json({
        status: "fail",
        message: "Something went wrong",
      });
    }
  }
};

// UPDATE A COMIC BOOK
exports.updateComicBook = async (req, res) => {
  try {
    const comicBook = await MyCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!comicBook /*means not null */) {
      throw new Error("Comic book not found in db");
    } else {
      res.status(200).json(
        // status: "success",
        // message: "Your comic book was successfully updated !!!",
        comicBook
      );
    }
  } catch (error) {
    if (
      !mongoose.Types.ObjectId.isValid(req.params.id) ||
      error.message === "Comic book not found in db"
    ) {
      return res.status(404).json({
        status: "Not found",
        message: "Comic book not found in db",
      });
    } else {
      console.log(error);
      res.status(400).json({
        status: "fail",
        message: "Something went wrong",
      });
    }
  }
};

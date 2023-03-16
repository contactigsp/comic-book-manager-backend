const mongoose = require("mongoose");
const Wishlist = require("../models/wishlistModel");

// GET ALL COMIC BOOKS

exports.getAllComicBooks = async (req, res) => {
  try {
    const wishlist = await Wishlist.find().sort({ createdAt: -1 });
    res.status(200).json(
      // status: "success",
      // message: "Here's your wishlist !!!",
      wishlist
    );
  } catch (error) {
    console.log(error);
  }
};

// CREATE A NEW COMIC BOOK

exports.createComicBook = async (req, res) => {
  try {
    const newComicBook = await Wishlist.create(req.body);
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
    const comicBook = await Wishlist.findById(req.params.id);

    if (!comicBook /*means not null */) {
      throw new Error("Comic book not found in db lol");
    } else {
      res.status(200).json({
        // status: "success",
        // message: "Here's your comic book from your wishlist !!!",
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
    const comicBook = await Wishlist.findByIdAndDelete(req.params.id);

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
    const comicBook = await Wishlist.findByIdAndUpdate(
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

const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: [true, "Field required"],
    },
    publisher: {
      type: String,
      required: [true, "Field required"],
    },
    title: {
      type: String,
      required: [true, "Field required"],
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
      required: [true, "Field required"],
    },
    release_date: {
      type: String,
    },
    progress: {
      type: String,
      //   required: [true, "Field required"],
    },
  },
  { timestamps: true }
);

const Wishlist = new mongoose.model("Wishlist", wishlistSchema);
module.exports = Wishlist;

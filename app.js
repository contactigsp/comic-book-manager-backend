const express = require("express");
const cors = require("cors");

// express app
const app = express();
app.use(express.json());

app.use(
    cors({
      origin: "https://comic-book-manager.onrender.com",
    })
  );

// MOUNTING
// mycollection
const mycollectionRouter = require("./routes/myCollectionRoutes");
app.use("/api/v1/mycollection", mycollectionRouter); // in the express.Router().route("") we define the routes but we have to use this middleware to actually listen to the requests (its like acting between client and server), res, update and delete.

// wishlist
const wishlistRouter = require("./routes/wishlistRoutes");
app.use("/api/v1/wishlist", wishlistRouter);

module.exports = app;

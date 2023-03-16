const express = require("express");

// express app
const app = express();
app.use(express.json());

// MOUNTING
// mycollection
const mycollectionRouter = require("./routes/myCollectionRoutes");
app.use("/api/v1/mycollection", mycollectionRouter); // in the express.Router().route("") we define the routes but we have to use this middleware to actually listen to the requests (its like acting between client and server), res, update and delete.

// wishlist
const wishlistRouter = require("./routes/wishlistRoutes");
app.use("/api/v1/wishlist", wishlistRouter);

module.exports = app;
